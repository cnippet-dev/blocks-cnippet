// app/profile/settings/page.tsx
"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SettingsPage() {
    const handleSaveSettings = () => {
        toast.info("Settings saved! (Placeholder)");
        // Implement actual settings saving logic here
    };

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Settings</h1>
            <p className="mb-6 text-gray-600">
                Configure your application preferences.
            </p>

            <Card className="border-2 border-dashed border-gray-300 shadow-none dark:border-gray-700">
                <CardHeader>
                    <CardTitle>Application Preferences</CardTitle>
                    <CardDescription>
                        Customize how the application looks and behaves for you.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-gray-500">
                        This section is under development. Here you could add
                        options like:
                    </p>
                    <ul className="ml-4 list-inside list-disc text-gray-500">
                        <li>Theme selection (light/dark mode)</li>
                        <li>Notification preferences</li>
                        <li>Language settings</li>
                        <li>Timezone settings</li>
                    </ul>
                    <Button onClick={handleSaveSettings}>Save Settings</Button>
                </CardContent>
            </Card>
        </div>
    );
}
