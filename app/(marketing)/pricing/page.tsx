import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  badge,
}) => {
  return (
    <div
      className={`relative rounded-lg border p-8 ${
        highlighted
          ? 'border-blue-500 bg-gray-800'
          : 'border-gray-700 bg-gray-800/50'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
            {badge}
          </span>
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && (
            <span className="ml-2 text-gray-400 dark:text-gray-300">
              {period}
            </span>
          )}
        </div>
        <p className="mt-4 text-gray-400 dark:text-gray-300">{description}</p>
      </div>
      <ul className="mb-8 space-y-4">
        {features.map((feature) => (
          <li key={feature.name} className="flex items-center">
            {feature.included ? (
              <CheckCircle2 className="mr-3 h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="mr-3 h-5 w-5 text-gray-500" />
            )}
            <span
              className={`${
                feature.included
                  ? 'text-gray-300'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`block w-full rounded-md px-4 py-2 text-center text-sm font-medium ${
          highlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-400 dark:text-gray-300">
          Choose the plan that&apos;s right for you and your team
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Free Plan */}
        <PricingCard
          title="Free"
          price="$0"
          description="Perfect for individuals and small teams getting started."
          features={[
            { name: 'Up to 3 team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Basic issue tracking', included: true },
            { name: 'Email support', included: true },
            { name: 'API access', included: false },
            { name: 'Custom fields', included: false },
            { name: 'Advanced integrations', included: false },
          ]}
          buttonText="Sign Up Free"
          buttonLink="/signup"
        />

        {/* Pro Plan */}
        <PricingCard
          title="Pro"
          price="$10"
          period="per user / month"
          description="For growing teams that need more features and flexibility."
          features={[
            { name: 'Unlimited team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Advanced issue tracking', included: true },
            { name: 'Priority support', included: true },
            { name: 'API access', included: true },
            { name: 'Custom fields', included: true },
            { name: 'Advanced integrations', included: false },
          ]}
          buttonText="Coming Soon"
          buttonLink="#"
          highlighted
          badge="Popular"
        />

        {/* Enterprise Plan */}
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="For organizations that need advanced security and support."
          features={[
            { name: 'Unlimited team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Advanced issue tracking', included: true },
            { name: 'Dedicated support', included: true },
            { name: 'API access', included: true },
            { name: 'Custom fields', included: true },
            { name: 'Advanced integrations', included: true },
          ]}
          buttonText="Contact Sales"
          buttonLink="mailto:sales@linearclone.com"
        />
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Need a custom solution?
        </h2>
        <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
          Contact our sales team to discuss your specific requirements.
        </p>
        <a
          href="mailto:sales@linearclone.com"
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
};

export default PricingPage;
