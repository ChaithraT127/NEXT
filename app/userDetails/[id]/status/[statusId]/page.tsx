export default async function UserStatus({params}:{params:Promise<{id:string, statusId:string}>}){
const {id, statusId}= await params;
return (
    <div className="p-6 border border-[#808000] max-w-xl">
        <h1>Status:{statusId}</h1>
        <h1>UserId:{id}</h1>
    </div>

)
}