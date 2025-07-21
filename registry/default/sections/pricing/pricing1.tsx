// "use client";

// import { useState } from "react";
// import { Check, Info, Plus } from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip";

// export default function PricingPage() {
//     const [billingCycle, setBillingCycle] = useState("monthly");

//     const plans = [
//         {
//             name: "Basic",
//             popular: true,
//             monthlyPrice: 1000,
//             annualPrice: 10000,
//             description:
//                 "Basic features for up to 10 employees with everything you need.",
//             features: {
//                 basicFeatures: true,
//                 users: "10",
//                 individualData: "20 GB",
//                 support: true,
//                 automatedWorkflows: false,
//                 integrations: false,
//                 analytics: false,
//                 exportData: false,
//                 customReports: false,
//                 apiAccess: false,
//             },
//         },
//         {
//             name: "Business",
//             popular: false,
//             monthlyPrice: 2000,
//             annualPrice: 16000,
//             description:
//                 "Advanced features and reporting, better workflows and automation.",
//             features: {
//                 basicFeatures: true,
//                 users: "20",
//                 individualData: "40 GB",
//                 support: true,
//                 automatedWorkflows: true,
//                 integrations: true,
//                 analytics: true,
//                 exportData: true,
//                 customReports: true,
//                 apiAccess: true,
//             },
//         },
//         {
//             name: "Enterprise",
//             popular: false,
//             monthlyPrice: 40,
//             annualPrice: 32,
//             description:
//                 "Personalized service and enterprise security for large teams.",
//             features: {
//                 basicFeatures: true,
//                 users: "Unlimited",
//                 individualData: "Unlimited",
//                 support: true,
//                 automatedWorkflows: true,
//                 integrations: true,
//                 analytics: true,
//                 exportData: true,
//                 customReports: true,
//                 apiAccess: true,
//             },
//         },
//     ];

//     const featureRows = [
//         {
//             title: "Overview",
//             features: [
//                 {
//                     name: "Basic features",
//                     key: "basicFeatures",
//                     tooltip: "Core functionality and basic tools",
//                 },
//                 {
//                     name: "Users",
//                     key: "users",
//                     tooltip: "Number of team members that can use the platform",
//                 },
//                 {
//                     name: "Individual data",
//                     key: "individualData",
//                     tooltip: "Storage space allocated per user",
//                 },
//                 {
//                     name: "Support",
//                     key: "support",
//                     tooltip: "Customer support availability",
//                 },
//                 {
//                     name: "Automated workflows",
//                     key: "automatedWorkflows",
//                     tooltip: "Automation tools and workflow builders",
//                 },
//                 {
//                     name: "200+ integrations",
//                     key: "integrations",
//                     tooltip: "Connect with popular third-party tools",
//                 },
//             ],
//         },
//         {
//             title: "Reporting and analytics",
//             features: [
//                 {
//                     name: "Analytics",
//                     key: "analytics",
//                     tooltip: "Analytics and insights for your data",
//                 },
//                 {
//                     name: "Export data",
//                     key: "exportData",
//                     tooltip: "Analytics and insights for your data",
//                 },
//                 {
//                     name: "Custom reports",
//                     key: "customReports",
//                     tooltip: "Analytics and insights for your data",
//                 },
//                 {
//                     name: "API Access",
//                     key: "apiAccess",
//                     tooltip: "Analytics and insights for your data",
//                 },
//             ],
//         },
//     ];

//     const getPrice = (plan: (typeof plans)[0]) => {
//         return billingCycle === "monthly"
//             ? plan.monthlyPrice
//             : plan.annualPrice;
//     };

//     return (
//         <>
//             <TooltipProvider>
//                 <div className="mx-auto w-full max-w-7xl px-4 py-16">
//                     <div className="mb-16 text-center">
//                         <div className="mb-4 font-medium text-purple-600">
//                             Pricing
//                         </div>
//                         <h1 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
//                             Compare our plans and find yours
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-600">
//                             Simple, transparent pricing that grows with you. Try
//                             any plan free for 30 days.
//                         </p>

//                         <Tabs
//                             value={billingCycle}
//                             onValueChange={setBillingCycle}
//                             className="mx-auto w-fit"
//                         >
//                             <TabsList className="grid w-full grid-cols-2">
//                                 <TabsTrigger value="monthly">
//                                     Monthly billing
//                                 </TabsTrigger>
//                                 <TabsTrigger value="annual">
//                                     Annual billing
//                                 </TabsTrigger>
//                             </TabsList>
//                         </Tabs>
//                     </div>

//                     <div className="grid w-full grid-cols-4 border-b pb-3 gap-8">
//                         <div />
//                         {plans.map((plan) => (
//                             <div
//                                 key={plan.name}
//                                 className="flex items-center justify-start gap-2 px-6"
//                             >
//                                 <CardTitle className="text-xl font-semibold">
//                                     {plan.name}
//                                 </CardTitle>
//                                 {plan.popular && (
//                                     <Badge className="bg-purple-600 hover:bg-purple-700">
//                                         Popular
//                                     </Badge>
//                                 )}
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mb-16 grid gap-8 md:grid-cols-4">
//                         <div />

//                         {plans.map((plan) => (
//                             <Card
//                                 key={plan.name}
//                                 className="relative border-none shadow-none"
//                             >
//                                 <CardHeader className="pb-8 text-left">
//                                     <CardTitle className="sr-only text-xl font-semibold">
//                                         {plan.name}
//                                     </CardTitle>
//                                     <div className="mt-2">
//                                         <span className="text-4xl font-bold">
//                                             ₹{getPrice(plan)}
//                                         </span>

//                                         <span className="ml-1 text-gray-600">
//                                             per{" "}
//                                             {billingCycle == "monthly"
//                                                 ? "month"
//                                                 : "year"}
//                                         </span>
//                                     </div>

//                                     <CardDescription className="mt-auto text-gray-600">
//                                         {plan.description}
//                                     </CardDescription>
//                                 </CardHeader>
//                                 <CardContent className="space-y-4">
//                                     <Button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700">
//                                         Get started
//                                     </Button>
//                                     <Button
//                                         variant="outline"
//                                         className="w-full cursor-pointer bg-transparent"
//                                     >
//                                         Chat to sales
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         ))}
//                     </div>

//                     <div>
//                         {featureRows.map((row) => (
//                             <div key={row.title} className="mb-16">
//                                 <div className="mb-6 px-4 font-medium text-purple-600">
//                                     {row.title}
//                                 </div>
//                                 <div className="overflow-x-auto">
//                                     <table className="w-full">
//                                         <thead>
//                                             <tr className="sr-only grid grid-cols-4 rounded-md bg-gray-50">
//                                                 <th></th>
//                                                 {plans.map((plan) => (
//                                                     <th
//                                                         key={plan.name}
//                                                         className="px-4 py-4 font-medium text-left"
//                                                     >
//                                                         {plan.name}
//                                                     </th>
//                                                 ))}
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {row.features.map((feature, i) => (
//                                                 <tr
//                                                     key={feature.key}
//                                                     className={`grid grid-cols-4 ${i % 2 === 0 ? "rounded-md bg-gray-100/80" : ""}`}
//                                                 >
//                                                     <td className="py-4 pr-8">
//                                                         <div className="flex items-center gap-2">
//                                                             <span className="px-4 font-medium">
//                                                                 {feature.name}
//                                                             </span>
//                                                             <Tooltip>
//                                                                 <TooltipTrigger>
//                                                                     <Info className="h-4 w-4 text-gray-400" />
//                                                                 </TooltipTrigger>
//                                                                 <TooltipContent>
//                                                                     <p>
//                                                                         {
//                                                                             feature.tooltip
//                                                                         }
//                                                                     </p>
//                                                                 </TooltipContent>
//                                                             </Tooltip>
//                                                         </div>
//                                                     </td>
//                                                     {plans.map((plan) => (
//                                                         <td
//                                                             key={`${plan.name}-${feature.key}`}
//                                                             className="px-4 py-4 text-center"
//                                                         >
//                                                             {(() => {
//                                                                 const value =
//                                                                     plan
//                                                                         .features[
//                                                                         feature.key as keyof typeof plan.features
//                                                                     ];
//                                                                 if (
//                                                                     typeof value ===
//                                                                     "boolean"
//                                                                 ) {
//                                                                     return value ? (
//                                                                         <Check className="mx-auto h-5 w-5 text-green-600" />
//                                                                     ) : (
//                                                                         <Plus className="mx-auto h-5 w-5 rotate-45 text-red-500" />
//                                                                     );
//                                                                 } else if (
//                                                                     Array.isArray(
//                                                                         value,
//                                                                     ) &&
//                                                                     value.length ===
//                                                                         2 &&
//                                                                     typeof value[0] ===
//                                                                         "boolean" &&
//                                                                     typeof value[1] ===
//                                                                         "string"
//                                                                 ) {
//                                                                     return value[0] ? (
//                                                                         <span className="flex items-center justify-center gap-1 text-sm font-medium">
//                                                                             <Check className="h-5 w-5 text-green-600" />
//                                                                             {
//                                                                                 value[1]
//                                                                             }
//                                                                         </span>
//                                                                     ) : (
//                                                                         <span className="flex items-center justify-center gap-1 text-sm font-medium">
//                                                                             <Plus className="h-5 w-5 rotate-45 text-red-400" />
//                                                                             {
//                                                                                 value[1]
//                                                                             }
//                                                                         </span>
//                                                                     );
//                                                                 } else {
//                                                                     return (
//                                                                         <span className="text-sm font-medium">
//                                                                             {
//                                                                                 value
//                                                                             }
//                                                                         </span>
//                                                                     );
//                                                                 }
//                                                             })()}
//                                                         </td>
//                                                     ))}
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </TooltipProvider>
//         </>
//     );
// }

// "use client";

// import { Check, Zap, Layers, Database } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
// } from "@/components/ui/card";
// import { useState } from "react";

// const pricingPlans = [
//     {
//         id: "basic",
//         name: "Basic plan",
//         price: "₹100",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Zap,
//         features: [
//             "Access to all basic features",
//             "Basic reporting and analytics",
//             "Up to 10 individual users",
//             "20 GB individual data each user",
//             "Basic chat and email support",
//         ],
//     },
//     {
//         id: "business",
//         name: "Business plan",
//         price: "₹200",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Layers,
//         features: [
//             "200+ integrations",
//             "Advanced reporting and analytics",
//             "Up to 20 individual users",
//             "40 GB individual data each user",
//             "Priority chat and email support",
//         ],
//     },
//     {
//         id: "enterprise",
//         name: "Enterprise plan",
//         price: "₹400",
//         period: "/mth",
//         billing: "Billed annually.",
//         icon: Database,
//         features: [
//             "Advanced custom fields",
//             "Audit log and data history",
//             "Unlimited individual users",
//             "Unlimited individual data",
//             "Personalized + priority service",
//         ],
//     },
// ];

// export default function PricingSection() {
//     const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

//     const handleGetStarted = (planId: string) => {
//         setSelectedPlan(planId);
//         console.log(`Selected plan: ${planId}`);
//     };

//     return (
//         <div className="mx-auto w-full max-w-7xl px-4 py-16">
//             <div className="mb-16 text-left">
//                 <p className="mb-4 font-medium text-purple-600">Pricing</p>
//                 <h1 className="mb-5 text-4xl font-semibold text-gray-900 md:text-5xl">
//                     Simple, transparent pricing
//                 </h1>
//                 <p className="max-w-2xl text-lg text-gray-600">
//                     We believe Untitled should be accessible to all companies,
//                     no matter the size.
//                 </p>
//             </div>

//             <div className="mx-auto grid gap-8 md:grid-cols-3">
//                 {pricingPlans.map((plan) => {
//                     const IconComponent = plan.icon;
//                     return (
//                         <Card
//                             key={plan.id}
//                             className="relative border overflow-hidden border-gray-200 shadow-none transition-shadow hover:shadow-md"
//                         >
//                             <CardHeader className="pb-8 text-center">
//                                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
//                                     <IconComponent className="size-6 text-purple-600" />
//                                 </div>
//                                 <h3 className="mb-4 text-3xl font-medium text-purple-700">
//                                     {plan.name}
//                                 </h3>
//                                 <div className="mb-2">
//                                     <span className="text-4xl font-semibold text-gray-900">
//                                         {plan.price}
//                                     </span>
//                                     <span className="text-4xl font-semibold text-gray-900">
//                                         {plan.period}
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-600">{plan.billing}</p>
//                             </CardHeader>

//                             <CardContent className="pb-8">
//                                 <ul className="space-y-4">
//                                     {plan.features.map((feature, index) => (
//                                         <li
//                                             key={index}
//                                             className="flex items-start gap-3"
//                                         >
//                                             <Check className="mt-0.5 h-5 w-5 flex-shrink-0 bg-purple-100 rounded-full p-0.5 text-purple-600" />
//                                             <span className="text-gray-700">
//                                                 {feature}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </CardContent>

//                             <CardFooter className="bg-gray-50 pt-6 border-t">
//                                 <Button
//                                     className="w-full rounded-lg bg-purple-600 cursor-pointer py-3 font-medium text-white transition-colors hover:bg-purple-700"
//                                     onClick={() => handleGetStarted(plan.id)}
//                                 >
//                                     Get started
//                                 </Button>
//                             </CardFooter>
//                         </Card>
//                     );
//                 })}
//             </div>

//             {/* Selected Plan Feedback */}
//             {selectedPlan && (
//                 <div className="mt-8 text-center">
//                     <p className="font-medium text-purple-600">
//                         You selected the{" "}
//                         {pricingPlans.find((p) => p.id === selectedPlan)?.name}!
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const pricingData = {
    monthly: {
        basic: { price: 10, period: "per month" },
        business: { price: 20, period: "per month" },
    },
    annual: {
        basic: { price: 8, period: "per month" },
        business: { price: 16, period: "per month" },
    },
};

const plans = [
    {
        id: "basic",
        name: "Basic plan",
        description: "Our most popular plan for small teams.",
        features: [
            { left: "Access to basic features", right: "Attend events" },
            { left: "Basic reporting + analytics", right: "Automatic updates" },
            { left: "Up to 10 individual users", right: "Backup your account" },
            { left: "20 GB individual data", right: "Audit log and notes" },
            { left: "Basic chat support", right: "Feature requests" },
        ],
    },
    {
        id: "business",
        name: "Business plan",
        description: "Advanced features and reporting.",
        popular: true,
        features: [
            { left: "200+ integrations", right: "Advanced custom fields" },
            { left: "Advanced reporting", right: "Audit log and data history" },
            { left: "Up to 20 individual users", right: "Backup your account" },
            { left: "40 GB individual data", right: "Personalized service" },
            { left: "Priority chat support", right: "+ many more..." },
        ],
    },
];

export default function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
        "monthly",
    );
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleGetStarted = (planId: string) => {
        setSelectedPlan(planId);
        console.log(`Selected ${planId} plan with ${billingPeriod} billing`);
    };

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
            {/* Header */}
            <div className="mb-12 text-center">
                <p className="mb-4 font-medium text-purple-600">Pricing</p>
                <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                    Plans that fit your scale
                </h1>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
                    Simple, transparent pricing that grows with you. Try any
                    plan free for 30 days.
                </p>

                {/* Billing Toggle */}
                <div className="mb-12 inline-flex items-center rounded-2xl bg-gray-100 p-1">
                    <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`rounded-xl px-6 py-1 font-medium transition-colors ${
                            billingPeriod === "monthly"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Monthly billing
                    </button>
                    <button
                        onClick={() => setBillingPeriod("annual")}
                        className={`flex items-center gap-2 rounded-xl px-6 py-1 font-medium transition-colors ${
                            billingPeriod === "annual"
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Annual billing
                        <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-700 hover:bg-green-100"
                        >
                            Save 20%
                        </Badge>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                {plans.map((plan) => {
                    const pricing =
                        pricingData[billingPeriod][
                            plan.id as keyof typeof pricingData.monthly
                        ];

                    return (
                        <Card
                            key={plan.id}
                            className="relative border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
                        >
                            {/* {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                                    <Badge className="bg-purple-600 text-white">
                                        Popular
                                    </Badge>
                                </div>
                            )} */}

                            <CardHeader className="flex flex-row items-end justify-between pb-6">
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-900">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-2 flex items-baseline gap-1">
                                    <div className="flex">
                                        <span className="text-3xl">₹</span>
                                        <span className="text-4xl font-semibold text-gray-900 md:text-5xl">
                                            {pricing.price}
                                        </span>
                                    </div>

                                    <span className="mt-auto text-gray-600">
                                        {pricing.period}
                                    </span>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-6">
                                <div className="mb-6">
                                    <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase">
                                        FEATURES
                                    </h4>
                                    <p className="mb-4 text-sm text-gray-600">
                                        Everything in our{" "}
                                        <span className="font-medium">
                                            {plan.id === "basic"
                                                ? "free plan"
                                                : "basic plan"}
                                        </span>{" "}
                                        plus....
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                    {plan.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-1 gap-3 md:grid-cols-2"
                                        >
                                            <div className="flex items-start gap-3">
                                                <Check className="mt-0.5 size-5 flex-shrink-0 rounded-full bg-green-100 p-0.5 text-green-600" />
                                                <span className="text-sm text-gray-700">
                                                    {feature.left}
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Check className="mt-0.5 size-5 flex-shrink-0 rounded-full bg-green-100 p-0.5 text-green-600" />
                                                <span className="text-sm text-gray-700">
                                                    {feature.right}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className="w-full rounded-lg bg-purple-600 cursor-pointer py-3 font-medium text-white transition-colors hover:bg-purple-700"
                                    onClick={() => handleGetStarted(plan.id)}
                                >
                                    Get started
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>

            {/* Selection Feedback */}
            {selectedPlan && (
                <div className="mt-8 text-center">
                    <p className="font-medium text-purple-600">
                        You selected the{" "}
                        {plans.find((p) => p.id === selectedPlan)?.name} with{" "}
                        {billingPeriod} billing!
                        {billingPeriod === "annual" && " (20% savings applied)"}
                    </p>
                </div>
            )}
        </div>
    );
}
