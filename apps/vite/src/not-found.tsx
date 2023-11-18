'use client';
import {Form} from './form';
import {ZodIssue} from 'zod';

type NotFoundProps = {
  issues: ZodIssue[];
};

export const NotFound = ({issues}: NotFoundProps): JSX.Element => {
  return (
    <div>
      <h1>not found</h1>
      {issues.map((issue) => (
        <p key={issue.path.toString()}>{issue.message}</p>
      ))}
      <section>
        <Form />
      </section>
    </div>
  );
};
