import React from 'react';

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled,
    children,
    className,
    ...rest
}) => {
    const theme: string = 'light';

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' && !disabled && onClick) {
            onClick();
        }
    };

    const buttonStyles = `py-2 px-4 rounded-full ${disabled
            ? `${theme === 'light' ? 'bg-gray-400' : 'bg-gray-700'} cursor-not-allowed`
            : `${theme === 'light' ? 'bg-blue-500  hover:bg-blue-600' : 'bg-indigo-500 hover:bg-indigo-600'}
            } text-white`
        } ${className ? className : ''}`;

    return (
        <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-disabled={disabled}
            className={buttonStyles}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
