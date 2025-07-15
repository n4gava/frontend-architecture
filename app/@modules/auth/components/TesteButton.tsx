'use client';

import { useCommand } from "@/components/hooks/useCommand";
import { useState } from "react";

export const TesteButton = () => {
    const [valor, setValor] = useState<string>("");
    const { execute } = useCommand<string>('TesteCommand');
    return <button onClick={async () => {
        const result = await execute("Hello from TesteButton!");
        console.log("Resultado do comando:", result);
        setValor(result.data);
    }}>{valor || "Click me"}</button>;
}