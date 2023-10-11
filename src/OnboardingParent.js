// src/OnboardingParent.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import { useParams, useNavigate } from "react-router-dom";

export default function OnboardingParent() {
  const [currentStep, setCurrentStep] = useState(1);
  const { stepNumber } = useParams();
  const navigate = useNavigate(); // Instantiate useNavigate

  // Group state for Step1 into a single object
  const [step1Data, setStep1Data] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  // Group state for Step2 into a single object
  const [step2Data, setStep2Data] = useState({
    twitter: "",
    tiktok: "",
    facebook: "",
    linkedin: "",
    linkedinBusiness: "",
    facebookBusiness: "",
    twitterBusiness: "",
    youtubeBusiness: "",
    tiktokBusiness: "",
  });

  const [step3Data, setStep3Data] = useState({
    googleAdAccounts: "",
    analytics: "",
    tagManager: "",
    googleMyBusiness: "",
  });

  const [step4Data, setStep4Data] = useState({
    cms: "",
    salesFunnel: "",
    domainRegistrar: "",
    crm: "",
    email: "",
    sms: "",
  });

  const [step6Data, setStep6Data] = useState({
    background: '',
    challenges: '',
    industryFacts: '',
    strengthsWeaknesses: '',
    longTermGoals: '',
    measureOfSuccess: '',
    budget: '',
  });

  const [step7Data, setStep7Data] = useState({
    values: '',
    uniqueValueProposition: '',
    problemsSolved: '',
    communicationStrategy: '',
    research: '',
    knowledgeGaps: '',
    competitors: '',
    strengthsWeaknesses: '',
    marketShareStrategy: '',
    adSpendingMessaging: '',
  });
  
  // Step 8
  const [step8Data, setStep8Data] = useState({
    currentMarkets: '',
    priorityMarkets: '',
    expansionPotential: '',
    existingCustomerProfile: '',
    optimalCustomerProfile: '',
    culturalTrends: '',
    diversityInclusion: '',
    audienceMotivation: '',
  });
  
  // Step 9
  const [step9Data, setStep9Data] = useState({
    uniqueSellingProposition: '',
    problemSolved: '',
    commonResult: '',
    currentPromotions: '',
    bestSellingProduct: '',
    crossSellingOpportunities: '',
  });
  

  useEffect(() => {
    setCurrentStep(parseInt(stepNumber, 10));
  }, [stepNumber]);

  const handleInputChange = (step, key, value) => {
    if (step === 1) {
      setStep1Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 2) {
      setStep2Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 3) {
      setStep3Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 4) {
      setStep4Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 6) {
      setStep6Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 7) {
      setStep7Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 8) {
      setStep8Data((prevState) => ({ ...prevState, [key]: value }));
    } else if (step === 9) {
      setStep9Data((prevState) => ({ ...prevState, [key]: value }));
    }
  };
  

// } else if (step === 5) {
  //   setStep2Data(prevState => ({ ...prevState, [key]: value }));
  // }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            step1Data={step1Data}
            onInputChange={(key, value) => handleInputChange(1, key, value)}
          />
        );
      case 2:
        return (
          <Step2
            step2Data={step2Data}
            onInputChange={(key, value) => handleInputChange(2, key, value)}
          />
        );
        case 3:
          return (
            <Step3
              step3Data={step3Data}
              onInputChange={(key, value) => handleInputChange(3, key, value)}
            />
          );
        case 4:
          return (
            <Step4
              step4Data={step4Data}
              onInputChange={(key, value) => handleInputChange(4, key, value)}
            />
          );
        case 5:
          return (
            <Step5
            />
          );
        case 6:
          return (
            <Step6
              step6Data={step6Data}
              onInputChange={(key, value) => handleInputChange(6, key, value)}
            />
          );
        case 7:
          return (
            <Step7
              step7Data={step7Data}
              onInputChange={(key, value) => handleInputChange(7, key, value)}
            />
          );
        case 8:
          return (
            <Step8
              step8Data={step8Data}
              onInputChange={(key, value) => handleInputChange(8, key, value)}
            />
          );
        case 9:
          return (
            <Step9
              step9Data={step9Data}
              onInputChange={(key, value) => handleInputChange(9, key, value)}
            />
          );
        default:
          return <Step1 />;
      }
  };

  const handleNext = () => {
    if (currentStep < 10) {
      setCurrentStep(currentStep + 1);
      navigate(`/onboarding/step/${currentStep + 1}`); // Update the URL
      window.scrollTo(0, 0); // Scroll to top
    }
};

const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/onboarding/step/${currentStep - 1}`); // Update the URL
      window.scrollTo(0, 0); // Scroll to top
    }
};

  // const handleSidebarClick = (step) => {
  //   setCurrentStep(step);
  //   navigate(`/onboarding/step/${step}`); // Update the URL

  // };

  // onSidebarClick={handleSidebarClick}

  return (
    <div className="onboarding-container">
      <Sidebar currentStep={currentStep} />
      <div className="main-content">
        {renderStep()}
        <div className="step-navigation">
          {currentStep > 1 ? (
            <button className="button back-button" onClick={handleBack}>
              Back
            </button>
          ) : (
            <div className="button-placeholder"></div> /* Placeholder div */
          )}
          <button className="button" onClick={handleNext}>
            {currentStep === 10 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
