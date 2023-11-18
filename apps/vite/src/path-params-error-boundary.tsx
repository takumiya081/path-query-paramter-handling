'use client';
import React from 'react';
import {RoutePathParamsError} from './use-path-params';
import {ErrorBoundary} from 'react-error-boundary';
import {z} from 'zod';

type PathParamsErrorProps = {
  pathParamsErrorFallbackRender?: (props: {issues: z.ZodIssue[]}) => React.ReactNode;
  children: React.ReactNode;
};

export const PathParamsErrorBoundary = ({
  pathParamsErrorFallbackRender,
  children,
}: PathParamsErrorProps): JSX.Element => {
  return (
    <ErrorBoundary
      fallbackRender={({error}) => {
        if (error instanceof RoutePathParamsError) {
          if (pathParamsErrorFallbackRender) {
            return <>{pathParamsErrorFallbackRender({issues: error.issues})}</>;
          }
          return <p>not found!!</p>;
        }
        throw error;
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
