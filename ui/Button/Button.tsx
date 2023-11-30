import {ReactNode} from 'react';

type ButtonProps = {
    children?: ReactNode
}

function Button({children}: ButtonProps) {
    return (
        <button style={{
            background: 'red',
            border:'none',
            padding: '10px 20px',
            color: 'white',
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 600
        }}>{children}</button>
    );
}

export {Button, type ButtonProps};
