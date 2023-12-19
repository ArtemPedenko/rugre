'use client';
import {Form} from "./components/Form";
import { useRouter } from 'next/navigation'
import {useState} from "react";
import {loginUser} from "@/app/utils/services/userService";


export default function LoginPage() {
    const router = useRouter()
    type LoginErrorType = boolean | string;
    const [loginError, setLoginError] = useState<LoginErrorType>(false)
    async function login(login: string, password: string) {
        const log =await loginUser(login, password)
        if (!log.success) {
            setLoginError(log.error)
        } else {
            router.push('/admin')
        }
    }

    return (
        <div className="mx-auto my-60 w-1/2">
            {loginError? <div className="flex justify-center text-red-600" >{loginError}</div> : null}
            <Form loginUser={login}/>

        </div>
    );
}



// import Form from "./components/Form";
// import {useEffect} from "react";
// import {router} from "next/client";
//
//
//
// export default function LoginPage() {
//     useEffect(() => {
//         // Ваша логика успешной аутентификации
//         const isAuthenticated = true; // Замените на вашу логику проверки аутентификации
//
//         if (isAuthenticated) {
//             // Выполняем редирект после успешной аутентификации
//             router.push('/dashboard'); // Замените на ваш путь перенаправления
//         }
//     }, []);
//   return (
//     <div className="mx-auto my-60 w-1/2">
//       <Form />
//     </div>
//   );
// }
