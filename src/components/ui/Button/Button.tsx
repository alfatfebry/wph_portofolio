import React from 'react';
import Styles from './Button.module.scss';
import clsx from 'clsx';

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type PropToElement<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>;

type ButtonProp<T extends React.ElementType> = AsProp<T> & {
  children?: React.ReactNode;
  className?: string;
} & Omit<PropToElement<T>, keyof AsProp<T>>;

export const Button = <T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  ...rest
}: ButtonProp<T>) => {
  const Component = as || 'button';
  return (
    <Component className={clsx(Styles.button, className)} {...rest}>
      <>{children}</>
    </Component>
  );
};
