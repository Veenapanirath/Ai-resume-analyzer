import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta=()=>
    (
        [
            {title:'Resumemind|Auth'},
            {name:'description',content:'Log in to your Account'}
        ]
    )



const Auth=()=>
{
    const {isLoading,auth}=usePuterStore();
    const location=useLocation()
    const navigate=useNavigate();
    const next = new URLSearchParams(location.search).get("next") || "/";
    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);


    }, [auth.isAuthenticated,next]);
    return(
       <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center h-screen -mx-auto">
           <div className="gradient-border shadow-lg">
               <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                   <div className="flex flex-col gap-2 items-center text-center">
                       <h1>Welcome</h1>
                       <h2>Log in to Contimue your job journey</h2>
                   </div>
                   <div>
                       {isLoading?
                           (
                               <button className="auth-button animate-pulse">
                                   <p>Signing you in...</p>
                               </button>
                           ):
                           (
                               <>
                               {auth?.isAuthenticated?(
                                   <button className="auth-button" onClick={auth.signOut}>
                                       Log out
                                   </button>
                               ):
                                   (
                                       <button className="auth-button" onClick={auth.signIn}>
                                           Log in
                                       </button>

                                   )}
                               </>
                           )}
                   </div>
               </section>
           </div>

       </main>
    )
}
export default Auth;
