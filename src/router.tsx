import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import BookDemoOverlay from "./components/BookDemoOverlay";
import CampaignBuilder from "./pages/CampaignBuilder/campaignbuilder";
import Healthcare from "./pages/HealthCarePage/healthcarepage";
import PabauWayPage from "./pages/PabauWayPage/pabauwaypage";
import ClinicPage from "./pages/ClinicPage/clinicpage";
import PabauAIPage from "./pages/PabauAIPage/pabauaipage";
import ContentPage from "./pages/ContentPage/contentpage";
import CustomerPage from "./pages/CustomerPage/customerpage";
import CaseStudiesPage from "./pages/CaseStudies/caseStudiesPage";
import IntegrationPage from "./pages/IntegrationPage/integrationpage";
import ExplorePage from "./pages/ExplorePage/explorepage";
import FAQ from "./pages/FAQ/faq";
("./pages/FooterPage/footerpage");
import PricingPage from "./pages/PricingPage/pricingpage";
import PatientCareRecordsPage from "./pages/PatientCareRecordsPage/patientcarerecordspage";
import SchedulingPaymentsPage from "./pages/SchedulingPaymentsPage/schedulingpaymentspage";
import TeamOperationsPage from "./pages/TeamOperationsPage/teamoperationspage";
import GrowthInsightsPage from "./pages/GrowthInsightsPage/growthInsights";
import StaffManagement from "./components/StaffManagement.tsx";
import CommissionsPage from "./pages/CommissionsPage/commissionspage";
import TimesheetsPage from "./pages/TimesheetsPage/timesheetspage";
import CompliancePage from "./pages/CompliancePage/compliancepage";
import CalendarFeaturePage from "./pages/features/calendarfeaturepage";
import OnlineBookingPage from "./pages/features/onlinebookingpage";
import ScrollToTop from "./components/ScrollToTop.js";
import NotFoundPage from "./components/NotFound.js";
import ClientPortalPage from "./pages/features/clientportalpage.js";
import AIConsultNotesPage from "./pages/features/aiconsultpage.js";
import ClinicalFormsPage from "./pages/features/clinicalforms.js";
import Medipay from "./pages/features/medipay.js";
import TelehealthNext from "./pages/features/telehealth.js";
import PatientRecords from "./pages/features/patientrecords";
import Membership from "./pages/features/membership.js";
import TreatmentPhotos from "./pages/features/treatmentphotos.js";
import AfterCarePlans from "./pages/features/aftercareplans.js";
import BillingCheckout from "./pages/features/billingcheckout.js";
import InsuranceClaims from "./pages/features/insuranceclaims.js";
import BookingPolicies from "./pages/features/bookingpolicies.js";
import Analytics from "./pages/features/analytics";
import EmailSmsCampaigns from "./pages/features/emailsms.js";
import TaskAutomation from "./pages/features/taskautomation.js";
import PatientLoyalty from "./pages/features/patientloyalty.js";
import GiftCards from "./pages/features/giftcards.js";
import Promotions from "./pages/features/promotions.js";
import Reviews from "./pages/features/reviews.js";
import PracticeReports from "./pages/features/practicereport.js";
import StockManagement from "./pages/features/stockmanagement.js";
import PrivatePracticeGP from "./pages/Who we're for/Wellness and Preventive Care/PrivatePracticeGP.tsx";
import Wellness from "./pages/Who we're for/Wellness and Preventive Care/Wellness.tsx";
import Longevity from "./pages/Who we're for/Wellness and Preventive Care/Longevity.tsx";
import FunctionalMedicine from "./pages/Who we're for/Wellness and Preventive Care/FunctionalMedicine.tsx";
import IVTherapy from "./pages/Who we're for/Wellness and Preventive Care/IVTherapy.tsx";
import FooterPage from "./pages/FooterPage/footerpage";
import WeightLoss from "./pages/Who we're for/Wellness and Preventive Care/WeightLoss.tsx";
import MetabolicHealth from "./pages/Who we're for/Wellness and Preventive Care/MetabolicHealth.tsx";
import MedSpa from "./pages/Who we're for/Medical Aesthetics/MedSpa.tsx";
import AestheticClinic from "./pages/Who we're for/Medical Aesthetics/AestheticClinic.tsx";
import Dermatology from "./pages/Who we're for/Medical Aesthetics/Dermatology.tsx";
import CosmeticSurgery from "./pages/Who we're for/Medical Aesthetics/CosmeticSurgery.tsx";
import SkinClinic from "./pages/Who we're for/Medical Aesthetics/SkinClinic.tsx";
import LaserClinic from "./pages/Who we're for/Medical Aesthetics/LaserClinic.tsx";
import HairTransplant from "./pages/Who we're for/Medical Aesthetics/HairTransplant.tsx";
import Spa from "./pages/Who we're for/Medical Aesthetics/Spa.tsx";
import Fertility from "./pages/Who we're for/Women's and Men's Health/Fertility.tsx";
import IVF from "./pages/Who we're for/Women's and Men's Health/IVF.tsx";
import MenHealth from "./pages/Who we're for/Women's and Men's Health/MenHealth.tsx";
import SexualHealth from "./pages/Who we're for/Women's and Men's Health/SexualHealth.tsx";
import PelvicHealth from "./pages/Who we're for/Women's and Men's Health/PelvicHealth.tsx";
import Hormone from "./pages/Who we're for/Women's and Men's Health/Hormone.tsx";
import PhysicalTherapy from "./pages/Who we're for/Musculoskeletal and Performance/PhysicalTherapy.tsx";
import SportsMedicine from "./pages/Who we're for/Musculoskeletal and Performance/SportsMedicine.tsx";
import Chiropractic from "./pages/Who we're for/Musculoskeletal and Performance/Chiropractic.tsx";
import Osteopathy from "./pages/Who we're for/Musculoskeletal and Performance/Osteopathy.tsx";
import RegenMedicine from "./pages/Who we're for/Musculoskeletal and Performance/RegenMedicine.tsx";
import MentalHealth from "./pages/Who we're for/Mental Health and Lifestyle/MentalHealth.tsx";
import Psychology from "./pages/Who we're for/Mental Health and Lifestyle/Psychology.tsx";
import TherapyCounselling from "./pages/Who we're for/Mental Health and Lifestyle/TherapyCounselling.tsx";
import ADHD from "./pages/Who we're for/Mental Health and Lifestyle/ADHD.tsx";
import Psychiatry from "./pages/Who we're for/Mental Health and Lifestyle/Psychiatry.tsx";
import Coaching from "./pages/Who we're for/Mental Health and Lifestyle/Coaching.tsx";
import SpeechTherapy from "./pages/Who we're for/Mental Health and Lifestyle/SpeechTherapy.tsx";
import OccupationalTherapy from "./pages/Who we're for/Mental Health and Lifestyle/OccupationalTherapy.tsx";
import SuccessStories from "./pages/WhyUs/SuccessStories.tsx";
import CompareClinics from "./pages/WhyUs/CompareClinics.tsx";
import Blog from "./pages/Blogs/Blog.tsx";
import BlogDetails from "./pages/Blogs/BlogDetails.tsx";
import Careers from "./pages/WhyUs/Company/Careers.tsx";
import AboutUs from "./pages/WhyUs/Company/AboutUs.tsx";
import Contact from "./pages/WhyUs/Company/Contact.tsx";
import OnSiteTraining from "./pages/WhyUs/OnSiteTraining.tsx";
import PRP from "./pages/Who we're for/Musculoskeletal and Performance/PRP.tsx";
import SecurityPage from "./pages/WhyUs/SecurityPage.tsx";
import AccountManagement from "./pages/WhyUs/AccountManagement.tsx";
import FullProjectManagement from "./pages/WhyUs/FullProjectManagement.tsx";
import GDPRPage from "./pages/WhyUs/GDPRPage.tsx";
import RevenueGrowth from "./pages/WhyUs/RevenueGrowth.tsx";
import PlatinumCustomerSuccess from "./pages/WhyUs/PlatinumCustomerSuccess.tsx";
import EBooks from "./pages/Resources/EBooks.tsx";
import ClientServicesPage from "./pages/Resources/ClientServicesPage.tsx";
import Templates from "./pages/Resources/Templates.tsx";
import ReferFriendPage from "./pages/Resources/ReferFriendPage.tsx";
import BuildWithPabau from "./pages/Resources/BuildWithPabau.tsx";
import DiagnosticCodesPage from "./pages/Resources/DiagnosticCodesPage.tsx";
import ProcedureCodesPage from "./pages/Resources/ProcedureCodesPage.tsx";
import PracticeOwner from "./pages/Who we're for/Role/PracticeOwner.tsx";
import TreatmentProvidersPage from "./pages/Who we're for/Role/TreatmentProvidersPage.tsx";
import MarketingPage from "./pages/Who we're for/Role/MarketingPage.tsx";
import EnterprisePage from "./pages/Who we're for/Role/EnterprisePage.tsx";
import LargeTeamsPage from "./pages/Who we're for/Role/LargeTeamsPage.tsx";
import SmallPracticePage from "./pages/Who we're for/Role/SmallPracticePage.tsx";
import Solo from "./pages/Who we're for/Role/Solo.tsx";
export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CampaignBuilder />

                <div className="isolate">
                  <ClinicPage />
                </div>

                <ContentPage />
                <CustomerPage />
                <Healthcare />
              </>
            }
          />
          <Route path="/campaign-builder" element={<CampaignBuilder />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/pabau-way" element={<PabauWayPage />} />
          <Route path="/clinic" element={<ClinicPage />} />
          <Route
            path="/patient-care-records"
            element={<PatientCareRecordsPage />}
          />
          <Route
            path="/scheduling-payments"
            element={<SchedulingPaymentsPage />}
          />
          <Route path="/staff-management" element={<StaffManagement />} />
          <Route path="/commissions" element={<CommissionsPage />} />
          <Route path="/timesheets" element={<TimesheetsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/team-operations" element={<TeamOperationsPage />} />
          <Route path="/growth-insights" element={<GrowthInsightsPage />} />
          <Route path="/pabau-ai" element={<PabauAIPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/integration" element={<IntegrationPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/product-tour" element={<PricingPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/footer" element={<FooterPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/book-demo" element={<BookDemoOverlay />} />
          <Route path="/features/calendar" element={<CalendarFeaturePage />} />
          <Route
            path="/features/online-booking"
            element={<OnlineBookingPage />}
          />
          <Route
            path="/features/client-portal"
            element={<ClientPortalPage />}
          />
          <Route
            path="/features/ai-consult-notes"
            element={<AIConsultNotesPage />}
          />
          <Route
            path="/features/clinical-forms"
            element={<ClinicalFormsPage />}
          />
          <Route path="/features/medipay" element={<Medipay />} />
          <Route path="/features/telehealth" element={<TelehealthNext />} />
          <Route
            path="/features/patient-records"
            element={<PatientRecords />}
          />
          <Route path="/features/memberships" element={<Membership />} />
          <Route
            path="/features/treatment-photos"
            element={<TreatmentPhotos />}
          />
          <Route
            path="/features/aftercare-plans"
            element={<AfterCarePlans />}
          />
          <Route
            path="/features/billing-checkout"
            element={<BillingCheckout />}
          />
          <Route
            path="/features/insurance-claims"
            element={<InsuranceClaims />}
          />
          <Route
            path="/features/booking-policies"
            element={<BookingPolicies />}
          />
          <Route path="/features/analytics" element={<Analytics />} />
          <Route
            path="/features/email-sms-campaigns"
            element={<EmailSmsCampaigns />}
          />
          <Route
            path="/features/task-automation"
            element={<TaskAutomation />}
          />
          <Route
            path="/features/patient-loyalty"
            element={<PatientLoyalty />}
          />
          <Route path="/features/gift-cards" element={<GiftCards />} />
          <Route path="/features/promotions" element={<Promotions />} />
          <Route path="/features/reviews" element={<Reviews />} />
          <Route
            path="/features/practice-reports"
            element={<PracticeReports />}
          />
          <Route
            path="/features/stock-management"
            element={<StockManagement />}
          />
          <Route path="/private-practice" element={<PrivatePracticeGP />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/iv-therapy" element={<IVTherapy />} />
          <Route path="/longevity" element={<Longevity />} />
          <Route path="/functional-medicine" element={<FunctionalMedicine />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/metabolic-health" element={<MetabolicHealth />} />
          <Route path="/medspa" element={<MedSpa />} />
          <Route path="/aesthetic-clinic" element={<AestheticClinic />} />
          <Route path="/dermatology" element={<Dermatology />} />
          <Route path="/cosmetic-surgery" element={<CosmeticSurgery />} />
          <Route path="/skin-clinic" element={<SkinClinic />} />
          <Route path="/laser-clinic" element={<LaserClinic />} />
          <Route path="/hair-transplant-clinic" element={<HairTransplant />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/fertility" element={<Fertility />} />
          <Route path="/ivf" element={<IVF />} />
          <Route path="/men-health" element={<MenHealth />} />
          <Route path="/sexual-health" element={<SexualHealth />} />
          <Route path="/pelvic-health" element={<PelvicHealth />} />
          <Route path="/hormone-replacement-therapy" element={<Hormone />} />
          <Route path="/physical-therapy" element={<PhysicalTherapy />} />
          <Route path="/sports-medicine" element={<SportsMedicine />} />
          <Route path="/chiropractic" element={<Chiropractic />} />
          <Route path="/osteopathy" element={<Osteopathy />} />
          <Route path="/regenerative-medicine" element={<RegenMedicine />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/therapy-counseling" element={<TherapyCounselling />} />
          <Route path="/adhd-assessment" element={<ADHD />} />
          <Route path="/psychiatry" element={<Psychiatry />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/speech-therapy" element={<SpeechTherapy />} />
          <Route
            path="/occupational-therapy"
            element={<OccupationalTherapy />}
          />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/compare-clinic" element={<CompareClinics />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/on-site-training" element={<OnSiteTraining />} />
          <Route path="/prp-therapy" element={<PRP />} />
          <Route path="/security-commitment" element={<SecurityPage />} />
          <Route path="/account-management" element={<AccountManagement />} />
          <Route
            path="/full-project-management"
            element={<FullProjectManagement />}
          />
          <Route path="/gdpr-compliance" element={<GDPRPage />} />
          <Route
            path="/revenue-growth-consultation"
            element={<RevenueGrowth />}
          />
          <Route
            path="/platinum-customer-success"
            element={<PlatinumCustomerSuccess />}
          />
          <Route path="/ebooks" element={<EBooks />} />
          <Route path="/client-services" element={<ClientServicesPage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/refer-friend" element={<ReferFriendPage />} />
          <Route path="/build-with-us" element={<BuildWithPabau />} />
          <Route path="/icd-codes" element={<DiagnosticCodesPage />} />
          <Route path="/procedure-codes" element={<ProcedureCodesPage />} />
          <Route path="/practice-owner" element={<PracticeOwner />} />
          <Route
            path="/treatment-providers"
            element={<TreatmentProvidersPage />}
          />
          <Route path="/marketers" element={<MarketingPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/large-practice" element={<LargeTeamsPage />} />
              <Route path="/small-practice" element={<SmallPracticePage />} />
              <Route path="/solo-practitioner" element={<Solo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <FooterPage />
    </BrowserRouter>
  );
}
