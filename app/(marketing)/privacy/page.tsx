import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-lg">
        <p>
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2>Introduction</h2>
        <p>
          Welcome to Linear Clone. We respect your privacy and are committed to
          protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>The Data We Collect About You</h2>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul>
          <li>
            <strong>Identity Data</strong> includes first name, last name,
            username or similar identifier.
          </li>
          <li>
            <strong>Contact Data</strong> includes email address.
          </li>
          <li>
            <strong>Technical Data</strong> includes internet protocol (IP)
            address, browser type and version, time zone setting and location,
            browser plug-in types and versions, operating system and platform,
            and other technology on the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data</strong> includes information about how you use
            our website and services.
          </li>
        </ul>

        <h2>How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorized way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know.
        </p>

        <h2>Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including the right to:
        </p>
        <ul>
          <li>Request access to your personal data.</li>
          <li>Request correction of your personal data.</li>
          <li>Request erasure of your personal data.</li>
          <li>Object to processing of your personal data.</li>
          <li>Request restriction of processing your personal data.</li>
          <li>Request transfer of your personal data.</li>
          <li>Right to withdraw consent.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy
          practices, please contact us at:
        </p>
        <p>
          <Link
            href="mailto:privacy@example.com"
            className="text-purple-600 hover:underline"
          >
            privacy@example.com
          </Link>
        </p>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-purple-600 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  )
}
