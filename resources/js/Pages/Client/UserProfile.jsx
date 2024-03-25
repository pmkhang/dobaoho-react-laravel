import FormInfo from "@/Components/client/User/FormInfo";
import UserSibar from "@/Components/client/User/UserSibar";
import ClientLayout from "@/Layouts/ClientLayout";

const UserProfile = ({ user }) => {
    
    return (
        <ClientLayout title={"Thông tin cá nhân"}>
            <div className="w-full grid grid-cols-4 gap-4 max-tl:grid-cols-1 max-tl:gap-0 max-tl:px-4 items-start">
                <UserSibar user={user} active={"info"} />
                <div className="col-span-3 flex flex-col bg-white rounded-lg shadow-lg px-8 py-4">
                    <div className="border-b-2 pb-2">
                        <p className="text-xl font-bold">Hồ Sơ Của Tôi</p>
                    </div>
                    <FormInfo user={user} />
                </div>
            </div>
        </ClientLayout>
    );
};

export default UserProfile;
