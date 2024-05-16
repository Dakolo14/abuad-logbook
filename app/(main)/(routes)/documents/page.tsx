"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentPage = () => {

    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating a new logbook...",
            success: "New logbook created!",
            error: "Failed to create a new logbook."
        });
    };

    return (  
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/main-light.png"
                height="300"
                width="300"
                alt="Hero Image"
                className="hidden dark:block"
            />
            <Image 
                src="/main-dark.png"
                height="300"
                width="300"
                alt="Hero Image"
                className="dark:hidden"
            />
            <h3 className="text-xl font-medium text-center">Welcome to {user?.firstName}&apos;s Abuad Logbook</h3>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Write your Progress Today
            </Button>
        </div>
    );
}
 
export default DocumentPage;