

export default async function LifeDomainPage({params}: {params: {id :string}}) {
    
    try {
        const response = await fetch(`${process.env.DOMAIN}/api/lockedin/life-domains?id=${params.id}`, {
        method: "GET"
        })

        if (response.ok) {
            return (
                <span className="">
                    <>Success {response.status}</>
                    <div className="">
                        This Life Domain {params.id}
                    </div>
                </span>)
        } else {
            return (
            <span className="">
                <>{response.status}</>
                <div className="">
                    This Life Domain {params.id}
                </div>
            </span>)

        }
    } catch (error) {
        console.log(error)
        return (
            <span className="">
                <>error</>
                <div className="">
                    This Life Domain {params.id}
                </div>
        </span>)
    }


}