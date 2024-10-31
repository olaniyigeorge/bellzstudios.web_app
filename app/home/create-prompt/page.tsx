"use client"
import { useEffect, useState } from "react"
import Form from "@/components/Form"
import { auth } from "@/utils/auth";
import router from "next/router";
import { toast } from "react-toastify";



const CreatePromptPage = () => {
    const [user, setUser] = useState<any>()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    })

    useEffect(() => {
        const fetchSession = async () => {
            const session = await auth();
            setUser(session?.user)
        };
    
        fetchSession();
    }, []);

    const createPrompt = async (e: any) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: user.id,
                    tag: post.tag
                })
            })

            if (response.ok) {
                // router.push('/')
                toast.success("Prompt created")
            } else {
                toast.error(`Error ${response.status} while creating prompt`)
            }
        } catch(error) {

        }
    }

    return (
        <Form 
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePromptPage