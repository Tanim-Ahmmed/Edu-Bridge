import useSession from "../hooks/useSession";

const Sessions = () => {
    const [session] = useSession();
    return (
        <div>
            <div className="text-center py-6">
            <h1 className="text-2xl font-bold py-2">Study Session</h1>
            <p>Our study sessions are designed to help you master your subjects through collaboration and expert guidance.</p>
            </div>
              <p>{session.length}</p>
        </div>
    );
};

export default Sessions;