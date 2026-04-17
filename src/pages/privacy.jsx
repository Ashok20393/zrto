import Footer from "../components/footer";
import PublicLayout from "../layouts/PublicLayout";
export default function Privacy() {
  return (
    <PublicLayout>
      <div className="bg-white text-gray-800 py-16 px-6">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-6 text-sm text-gray-500">
            Last updated: April 2026
          </p>

          <p className="mb-6 leading-relaxed">
            ZRTO ("we", "our", "us") values your privacy. This Privacy Policy
            explains how we collect, use, and protect your information when you use
            our platform.
          </p>

       
          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-4 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Account details such as name, email address, and login credentials</li>
            <li>Order data uploaded for prediction (e.g., order value, pincode, etc.)</li>
            <li>Usage data including API usage and interactions with the platform</li>
          </ul>

       
          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>To provide and improve our prediction services</li>
            <li>To analyze and enhance model accuracy</li>
            <li>To communicate important updates or support messages</li>
            <li>To ensure platform security and prevent misuse</li>
          </ul>

         
          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Data Security
          </h2>
          <p className="mb-6 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your data from unauthorized access, misuse, or disclosure.
            However, no system is completely secure.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            4. Data Sharing
          </h2>
          <p className="mb-6 leading-relaxed">
            We do not sell your data. Your information may only be shared with
            trusted third-party services required for platform operations
            (e.g., hosting, analytics).
          </p>

          
          <h2 className="text-xl font-semibold mt-8 mb-3">
            5. Data Retention
          </h2>
          <p className="mb-6 leading-relaxed">
            We retain your data only as long as necessary to provide services
            and comply with legal obligations.
          </p>


          <h2 className="text-xl font-semibold mt-8 mb-3">
            6. Your Rights
          </h2>
          <p className="mb-6 leading-relaxed">
            You have the right to access, update, or delete your personal data.
            You can contact us for any such requests.
          </p>

 
          <h2 className="text-xl font-semibold mt-8 mb-3">
            7. Contact Us
          </h2>
          <p className="mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>

          <p className="mb-2">📧 ashokcivil27@gmail.com</p>
          <p>📍 Hyderabad, India</p>

        </div>
      </div>
    </PublicLayout>
  );
}