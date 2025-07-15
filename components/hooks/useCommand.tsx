import { useCallback } from "react";

export const useCommand = <T,>(command: string) => {
    const execute = useCallback((data: T) => {
        return fetch(`/api/commands/${command}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command, data }),
        }).then((response) => response.json());
    }, [command]);

    return { execute };
}