'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Check, Building2, Users, Zap, Upload, Settings, AlertCircle, X } from 'lucide-react';

interface FormDataStep {
  companyName?: string;
  companyEmail?: string;
  industry?: string;
  country?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  phone?: string;
  displayCount?: string;
  displayLocations?: string[];
  resolution?: string;
  contentType?: string[];
  uploadFiles?: string[];
  teamMembers?: Array<{ email: string; role: string }>;
}

interface Step {
  id: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
}

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState<boolean>(false);
  
  const [formDataArray, setFormDataArray] = useState<FormDataStep[]>([
    {
      companyName: '',
      companyEmail: '',
      industry: '',
      country: '',
    },
    {
      firstName: '',
      lastName: '',
      jobTitle: '',
      phone: '',
    },
    {
      displayCount: '',
      displayLocations: [],
      resolution: '',
    },
    {
      contentType: [],
      uploadFiles: [],
    },
    {
      teamMembers: [{ email: '', role: 'viewer' }],
    },
  ]);

  const formData = formDataArray[currentStep];

  const steps: Step[] = [
    { id: 0, title: 'Company', icon: Building2, description: 'Organization details' },
    { id: 1, title: 'Account', icon: Users, description: 'User account' },
    { id: 2, title: 'Display', icon: Zap, description: 'Configure displays' },
    { id: 3, title: 'Content', icon: Upload, description: 'Upload media' },
    { id: 4, title: 'Team', icon: Settings, description: 'Invite members' },
  ];

  // Load saved data on mount
  useEffect(() => {
    loadData();
  }, []);

const loadData = () => {
  try {
    const result = localStorage.getItem('onboarding_complete_data');
    if (result) {
      const saved = JSON.parse(result);
      setFormDataArray(saved.formDataArray || formDataArray);
      setCurrentStep(saved.currentStep || 0);
      setCompleted(new Set(saved.completed || []));
    }
  } catch (error) {
    console.log('No saved data found');
  }
};

const saveData = () => {
  setLoading(true);
  try {
    localStorage.setItem(
      'onboarding_complete_data',
      JSON.stringify({
        formDataArray,
        currentStep,
        completed: Array.from(completed),
        timestamp: new Date().toISOString(),
      })
    );
  } catch (error) {
    console.error('Save error:', error);
    alert('Failed to save step. Please try again.');
  }
  setLoading(false);
};


 

  const handleInputChange = (field: string, value: any) => {
    setFormDataArray(prev => {
      const newArray = [...prev];
      newArray[currentStep] = { ...newArray[currentStep], [field]: value };
      return newArray;
    });
  };

  const addTeamMember = () => {
    setFormDataArray(prev => {
      const newArray = [...prev];
      const stepData = { ...newArray[4] };
      stepData.teamMembers = [...(stepData.teamMembers || []), { email: '', role: 'viewer' }];
      newArray[4] = stepData;
      return newArray;
    });
  };

  const removeTeamMember = (index: number) => {
    setFormDataArray(prev => {
      const newArray = [...prev];
      const stepData = { ...newArray[4] };
      stepData.teamMembers = (stepData.teamMembers || []).filter((_, i) => i !== index);
      newArray[4] = stepData;
      return newArray;
    });
  };

  const toggleContentType = (type: string) => {
    setFormDataArray(prev => {
      const newArray = [...prev];
      const stepData = { ...newArray[currentStep] };
      const contentType = stepData.contentType || [];
      stepData.contentType = contentType.includes(type)
        ? contentType.filter(t => t !== type)
        : [...contentType, type];
      newArray[currentStep] = stepData;
      return newArray;
    });
  };

  const nextStep = async () => {
    await saveData();
    const newCompleted = new Set(completed);
    newCompleted.add(currentStep);
    setCompleted(newCompleted);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Onboarding complete! All data has been saved.');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepCompleted = (stepId: number): boolean => completed.has(stepId);

  const CompanyStep: React.FC = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company Name *</label>
          <input
            type="text"
            value={formData.companyName || ''}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            placeholder="Your company"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company Email *</label>
          <input
            type="email"
            value={formData.companyEmail || ''}
            onChange={(e) => handleInputChange('companyEmail', e.target.value)}
            placeholder="company@example.com"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Industry *</label>
          <select
            value={formData.industry || ''}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select industry</option>
            <option value="retail">Retail</option>
            <option value="hospitality">Hospitality</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="transportation">Transportation</option>
            <option value="corporate">Corporate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Country *</label>
          <select
            value={formData.country || ''}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="in">India</option>
            <option value="au">Australia</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </select>
        </div>
      </div>
    </div>
  );

  const AccountStep: React.FC = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name *</label>
          <input
            type="text"
            value={formData.firstName || ''}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            placeholder="John"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name *</label>
          <input
            type="text"
            value={formData.lastName || ''}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            placeholder="Doe"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Job Title *</label>
          <input
            type="text"
            value={formData.jobTitle || ''}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
            placeholder="Marketing Manager"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
        <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-blue-800">We'll use this information to create your admin account.</p>
      </div>
    </div>
  );

  const DisplayStep: React.FC = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Number of Displays *</label>
          <select
            value={formData.displayCount || ''}
            onChange={(e) => handleInputChange('displayCount', e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select count</option>
            <option value="1">1 Display</option>
            <option value="2-5">2-5 Displays</option>
            <option value="6-10">6-10 Displays</option>
            <option value="11-25">11-25 Displays</option>
            <option value="25+">25+ Displays</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">Default Resolution *</label>
          <select
            value={formData.resolution || ''}
            onChange={(e) => handleInputChange('resolution', e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select resolution</option>
            <option value="1920x1080">1920x1080 (Full HD)</option>
            <option value="1280x720">1280x720 (HD)</option>
            <option value="3840x2160">3840x2160 (4K)</option>
            <option value="1024x768">1024x768 (XGA)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Display Locations</label>
        <div className="grid grid-cols-2 gap-2">
          {['Entrance', 'Checkout', 'Window', 'Dining Area', 'Meeting Room', 'Lobby'].map((location) => (
            <label key={location} className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={(formData.displayLocations || []).includes(location)}
                onChange={(e) => {
                  const newLocations = e.target.checked
                    ? [...(formData.displayLocations || []), location]
                    : (formData.displayLocations || []).filter(l => l !== location);
                  handleInputChange('displayLocations', newLocations);
                }}
                className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-cyan-600"
              />
              <span className="text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const ContentStep: React.FC = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Content Types You'll Use</label>
        <div className="grid grid-cols-3 gap-2">
          {['Videos', 'Images', 'Documents', 'Live Data', 'Social Media', 'Custom Apps'].map((type) => (
            <button
              key={type}
              onClick={() => toggleContentType(type)}
              className={`p-2 rounded-lg border transition-all text-left ${
                (formData.contentType || []).includes(type)
                  ? 'bg-cyan-50 border-cyan-500 text-cyan-900'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${(formData.contentType || []).includes(type) ? 'bg-cyan-600 border-cyan-600' : 'border-gray-300'}`}>
                  {(formData.contentType || []).includes(type) && <Check size={12} className="text-white" />}
                </div>
                <span className="font-medium text-xs">{type}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Upload Sample Content (Optional)</label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-cyan-500 transition-colors cursor-pointer hover:bg-cyan-50">
          <Upload size={24} className="mx-auto text-gray-400 mb-2" />
          <p className="text-xs text-gray-700">Drag and drop files or click to browse</p>
          <p className="text-xs text-gray-500 mt-1">Supported: MP4, PNG, JPG, PDF</p>
        </div>
      </div>
    </div>
  );

  const TeamStep: React.FC = () => (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-semibold text-gray-700">Invite Team Members</label>
          <button
            onClick={addTeamMember}
            className="text-xs bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-3 py-1 rounded transition-colors font-medium"
          >
            + Add
          </button>
        </div>

        <div className="space-y-2">
          {(formData.teamMembers || []).map((member, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="email"
                value={member.email}
                onChange={(e) => {
                  const newMembers = [...(formData.teamMembers || [])];
                  newMembers[idx].email = e.target.value;
                  handleInputChange('teamMembers', newMembers);
                }}
                placeholder="team@example.com"
                className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition text-xs focus:ring-2 focus:ring-cyan-500/20"
              />
              <select
                value={member.role}
                onChange={(e) => {
                  const newMembers = [...(formData.teamMembers || [])];
                  newMembers[idx].role = e.target.value;
                  handleInputChange('teamMembers', newMembers);
                }}
                className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 text-xs focus:border-cyan-500 focus:outline-none transition focus:ring-2 focus:ring-cyan-500/20"
              >
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </select>
              {idx > 0 && (
                <button
                  onClick={() => removeTeamMember(idx)}
                  className="px-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex gap-2">
        <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-green-800">You're all set! Team members will receive invitation emails.</p>
      </div>
    </div>
  );

  const stepComponents: React.ReactNode[] = [
    <CompanyStep key="company" />,
    <AccountStep key="account" />,
    <DisplayStep key="display" />,
    <ContentStep key="content" />,
    <TeamStep key="team" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-3">
            <Zap className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">Welcome to DigitalSignage</h1>
          <p className="text-gray-600 text-xs">Let's get your digital signage up and running in 5 minutes</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between relative">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === currentStep;
              const isDone = isStepCompleted(idx);

              return (
                <div key={step.id} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => idx <= currentStep && setCurrentStep(idx)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-1.5 transition-all relative z-10 ${
                        isDone
                          ? 'bg-green-500 text-white shadow-md'
                          : isActive
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md ring-4 ring-cyan-500/20'
                          : 'bg-white text-gray-400 border-2 border-gray-300 shadow-sm'
                      }`}
                    >
                      {isDone ? <Check size={16} /> : <StepIcon size={16} />}
                    </button>
                    <div className="text-center">
                      <p className={`text-xs font-semibold ${isActive ? 'text-cyan-600' : isDone ? 'text-green-600' : 'text-gray-600'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className={`absolute h-0.5 top-5 transition-all ${isDone ? 'bg-green-500' : isActive ? 'bg-gray-300' : 'bg-gray-200'}`} style={{
                      left: 'calc(50% + 20px)',
                      right: 'calc(-50% - 20px)',
                    }}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-bold text-gray-900">{steps[currentStep].title}</h2>
            <p className="text-gray-600 text-xs mt-0.5">{steps[currentStep].description}</p>
          </div>

          <div className="p-6">
            {stepComponents[currentStep]}
          </div>

          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 rounded-lg font-medium transition-colors text-sm"
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <div className="text-xs text-gray-600">
              Step {currentStep + 1} of {steps.length}
            </div>

            <button
              onClick={nextStep}
              disabled={loading}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md disabled:opacity-50'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-md disabled:opacity-50'
              }`}
            >
              {loading ? (
                'Saving...'
              ) : currentStep === steps.length - 1 ? (
                <>
                  Complete
                  <Check size={16} />
                </>
              ) : (
                <>
                  Next
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}