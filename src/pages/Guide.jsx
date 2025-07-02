import { useState } from 'react';
import GeminiRecyclingService from '../components/GeminiRecyclingService';
import './Guide.css';

function Guide() {
    const [formData, setFormData] = useState({
        itemName: '',
        materials: [],
        materialsOther: '',
        size: '',
        condition: '',
        plasticType: '',
        quantity: '',
        specialFeatures: '',
        userLocation: ''
    });
    const [recyclingGuidance, setRecyclingGuidance] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentStep, setCurrentStep] = useState(1);

    const geminiService = new GeminiRecyclingService();

    const materialOptions = [
        'Plastic', 'Paper/Cardboard', 'Glass', 'Metal (Aluminum)', 
        'Metal (Other)', 'Electronics', 'Battery', 'Fabric/Textile', 
        'Wood', 'Rubber', 'Mixed Materials', 'Other'
    ];

    const sizeOptions = [
        'Small (fits in hand)', 'Medium (size of a book)', 
        'Large (size of a box)', 'Extra Large (furniture size)'
    ];

    const conditionOptions = [
        'Clean/New', 'Slightly dirty', 'Very dirty/contaminated', 
        'Broken but intact', 'Broken into pieces', 'Still functional'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        setError('');
    };

    const handleMaterialChange = (material) => {
        setFormData(prev => ({
            ...prev,
            materials: prev.materials.includes(material)
                ? prev.materials.filter(m => m !== material)
                : [...prev.materials, material]
        }));
    };

    const createDetailedDescription = () => {
        const { itemName, materials, materialsOther, size, condition, plasticType, hasLabels, quantity, specialFeatures, userLocation } = formData;
        let description = `Item: ${itemName}`;
        if (materials.length > 0) {
            description += `\nMaterials: ${materials.join(', ')}`;
            if (materialsOther) {
                description += ` (${materialsOther})`;
            }}
        if (plasticType) {
            description += `\nPlastic type/recycling code: ${plasticType}`;}
        if (size) {
            description += `\nSize: ${size}`;}
        if (condition) {
            description += `\nCondition: ${condition}`;}
        if (hasLabels) {
            description += `\nRecycling labels/symbols present: ${hasLabels}`;}
        if (quantity) {
            description += `\nQuantity: ${quantity}`;}
        if (specialFeatures) {
            description += `\nSpecial features/concerns: ${specialFeatures}`;}
        if (userLocation) {
            description += `\nUser Location: ${userLocation}`;}
        console.log(description);
        return description;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.itemName.trim()) {
            setError('Please provide the item name');
            return;
        }

        if (formData.materials.length === 0) {
            setError('Please select at least one material');
            return;
        }

        setIsLoading(true);
        setError('');
        setRecyclingGuidance(null);

        try {
            const detailedDescription = createDetailedDescription();
            const guidance = await geminiService.getRecyclingGuidance(detailedDescription);
            setRecyclingGuidance(guidance);
        } catch (err) {
            setError('Failed to get recycling guidance. Please try again.');
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            itemName: '',
            materials: [],
            materialsOther: '',
            size: '',
            condition: '',
            plasticType: '',
            quantity: '',
            specialFeatures: '',
            userLocation: ''
        });
        setRecyclingGuidance(null);
        setError('');
        setCurrentStep(1);
    };

    return (
        <div className="guide-container">
            <h1>Item Recycling Guide</h1>
            
            {currentStep > 1 && (
                <button 
                    onClick={resetForm}
                    className="new-search-button"
                >
                    ← Retry
                </button>
            )}
            {!recyclingGuidance ? (
                <form onSubmit={handleSubmit} className="guide-form">
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${(currentStep / 4) * 100}%` }}></div>
                    </div>
                    
                    {/* Step 1: Basic Item Information */}
                    {currentStep == 1 && (
                        <div className="form-step">
                            <h2>Step 1: Basic Information</h2>
                            
                            <div className="input-group">
                                <label htmlFor="item-name">
                                    Item name/description *
                                </label>
                                <input
                                    id="item-name"
                                    type="text"
                                    value={formData.itemName}
                                    onChange={(e) => handleInputChange('itemName', e.target.value)}
                                    placeholder="e.g., water bottle, smartphone, pizza box, etc."
                                    className="item-input"
                                    disabled={isLoading}
                                />
                            </div>

                            {formData.itemName && (
                                <button 
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="next-button"
                                >
                                    Next: Materials
                                </button>
                            )}
                        </div>
                    )}

                    {/* Step 2: Materials & Markings */}
                    {currentStep == 2 && (
                        <div className="form-step">
                            <h2>Step 2: Materials & Markings *</h2>
                            <p className="step-description">Select all that apply:</p>
                            
                            <div className="checkbox-grid">
                                {materialOptions.map(material => (
                                    <label key={material} className="checkbox-item">
                                        <input
                                            type="checkbox"
                                            checked={formData.materials.includes(material)}
                                            onChange={() => handleMaterialChange(material)}
                                            disabled={isLoading}
                                        />
                                        <span className="checkbox-label">{material}</span>
                                    </label>
                                ))}
                            </div>

                            {formData.materials.includes('Plastic') && (
                                <div className="input-group">
                                    <label htmlFor="plastic-type">
                                        Plastic recycling code (if visible on item)
                                    </label>
                                    <select
                                        id="plastic-type"
                                        value={formData.plasticType}
                                        onChange={(e) => handleInputChange('plasticType', e.target.value)}
                                        className="select-input"
                                        disabled={isLoading}
                                    >
                                        <option value="">Not sure/No code visible</option>
                                        <option value="Mobius Loop">♲ Mobius Loop (generic recycling symbol)</option>
                                        <option value="#1 PET">♳ #1 PET (water bottles)</option>
                                        <option value="#2 HDPE">♴ #2 HDPE (milk jugs)</option>
                                        <option value="#3 PVC">♵ #3 PVC (pipes)</option>
                                        <option value="#4 LDPE">♶ #4 LDPE (bags)</option>
                                        <option value="#5 PP">♷ #5 PP (yogurt containers)</option>
                                        <option value="#6 PS">♸ #6 PS (styrofoam)</option>
                                        <option value="#7 Other">♹ #7 Other (mixed plastics)</option>
                                    </select>
                                </div>
                            )}
                            {(formData.materials.includes('Metal (Other)') || formData.materials.includes('Other')) && (
                                <div className="input-group">
                                    <label htmlFor="materials-other">
                                        Specifiy other materials (if applicable)
                                    </label>
                                    <input
                                        id="materials-other"
                                        type="text"
                                        value={formData.materialsOther}
                                        onChange={(e) => handleInputChange('materialsOther', e.target.value)}
                                        placeholder="e.g., steel, mixed metal, etc."
                                        className="item-input"
                                        disabled={isLoading}
                                    />
                                </div>
                            )}
                            <div className="button-group">
                                <button 
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                    className="back-button"
                                >
                                    Back
                                </button>
                                {formData.materials.length > 0 && (
                                    <button 
                                        type="button"
                                        onClick={() => setCurrentStep(3)}
                                        className="next-button"
                                    >
                                        Next: Details
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Physical Details */}
                    {currentStep == 3 && (
                        <div className="form-step">
                            <h2>Step 3: Physical Details</h2>
                            
                            <div className="input-group">
                                <label htmlFor="size">Size category</label>
                                <select
                                    id="size"
                                    value={formData.size}
                                    onChange={(e) => handleInputChange('size', e.target.value)}
                                    className="select-input"
                                    disabled={isLoading}
                                >
                                    <option value="">Select size...</option>
                                    {sizeOptions.map(size => (
                                        <option key={size} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="condition">Current condition</label>
                                <select
                                    id="condition"
                                    value={formData.condition}
                                    onChange={(e) => handleInputChange('condition', e.target.value)}
                                    className="select-input"
                                    disabled={isLoading}
                                >
                                    <option value="">Select condition...</option>
                                    {conditionOptions.map(condition => (
                                        <option key={condition} value={condition}>{condition}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="quantity">How many items?</label>
                                <input
                                    id="quantity"
                                    type="text"
                                    value={formData.quantity}
                                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                                    placeholder="e.g., 1, 5, a bag full, etc."
                                    className="item-input"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="button-group">
                                <button 
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                    className="back-button"
                                >
                                    Back
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setCurrentStep(4)}
                                    className="next-button"
                                >
                                    Next: Final Details
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Additional Information */}
                    {currentStep == 4 && (
                        <div className="form-step">
                            <h2>Step 4: Additional Information</h2>
                            
                            <div className="input-group">
                                <label htmlFor="special-features">
                                    Any special features or concerns?
                                </label>
                                <textarea
                                    id="special-features"
                                    value={formData.specialFeatures}
                                    onChange={(e) => handleInputChange('specialFeatures', e.target.value)}
                                    placeholder="e.g., contains batteries, has food residue, multiple parts, hazardous materials, etc."
                                    className="textarea-input"
                                    rows="3"
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="user-location">
                                    Your location (for local guidance)
                                </label>
                                <input
                                    id="user-location"
                                    type="text"
                                    value={formData.userLocation}
                                    onChange={(e) => handleInputChange('userLocation', e.target.value)}
                                    placeholder="e.g., New York, NY or ZIP code"
                                    className="location-input"
                                    disabled={isLoading}
                                />
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className="button-group">
                                <button 
                                    type="button"
                                    onClick={() => setCurrentStep(3)}
                                    className="back-button"
                                >
                                    Back
                                </button>
                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="primary-button"
                                >
                                    {isLoading ? 'Analyzing...' : 'Get Recycling Guide'}
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            ) : (
                <>
                    <div className="guidance-results">
                        <div className="analysis-section">
                            <h2>🔍 Item Analysis</h2>
                            <div className="analysis-grid">
                                <div><strong>Item:</strong> {recyclingGuidance.analysis.item}</div>
                                <div><strong>Material:</strong> {recyclingGuidance.analysis.material}</div>
                                <div><strong>Recyclability:</strong> 
                                    <span className={`recyclability ${recyclingGuidance.analysis.recyclability.toLowerCase()}`}>
                                        {recyclingGuidance.analysis.recyclability}
                                    </span>
                                </div>
                                {recyclingGuidance.analysis.recyclingCode && (
                                    <div><strong>Recycling Code:</strong> {recyclingGuidance.analysis.recyclingCode}</div>
                                )}
                            </div>
                        </div>

                        <div className="instructions-section">
                            <h2>♻️ Recycling Instructions</h2>
                            <div className="instruction-item">
                                <strong>Method:</strong> {recyclingGuidance.instructions.method}
                            </div>
                            <div className="instruction-item">
                                <strong>Preparation:</strong> {recyclingGuidance.instructions.preparation}
                            </div>
                            <div className="instruction-item">
                                <strong>Where to take it:</strong> {recyclingGuidance.instructions.location}
                            </div>
                        </div>

                        {recyclingGuidance.warnings && recyclingGuidance.warnings.length > 0 && (
                            <div className="warnings-section">
                                <h2>⚠️ Important Warnings</h2>
                                <ul>
                                    {recyclingGuidance.warnings.map((warning, index) => (
                                        <li key={index}>{warning}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="impact-section">
                            <h2>🌱 Environmental Impact</h2>
                            <p>{recyclingGuidance.environmentalImpact}</p>
                        </div>

                        {recyclingGuidance.alternatives && (
                            <div className="alternatives-section">
                                <h2>🔄 Alternative Options</h2>
                                
                                {recyclingGuidance.alternatives.reuse && recyclingGuidance.alternatives.reuse.length > 0 && (
                                    <div className="alternative-group">
                                        <h3>Reuse Ideas:</h3>
                                        <ul>
                                            {recyclingGuidance.alternatives.reuse.map((idea, index) => (
                                                <li key={index}>{idea}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {recyclingGuidance.alternatives.donation && recyclingGuidance.alternatives.donation.length > 0 && (
                                    <div className="alternative-group">
                                        <h3>Donation:</h3>
                                        <ul>
                                            <li>{recyclingGuidance.alternatives.donation}</li>
                                        </ul>
                                    </div>
                                )}

                                {recyclingGuidance.alternatives.upcycling && recyclingGuidance.alternatives.upcycling.length > 0 && (
                                    <div className="alternative-group">
                                        <h3>Upcycling Projects:</h3>
                                        <ul>
                                            {recyclingGuidance.alternatives.upcycling.map((project, index) => (
                                                <li key={index}>{project}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {recyclingGuidance.tips && recyclingGuidance.tips.length > 0 && (
                            <div className="tips-section">
                                <h2>💡 Additional Tips</h2>
                                <ul>
                                    {recyclingGuidance.tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </>

            )
            
            }
            
        </div>
    );
}

export default Guide;