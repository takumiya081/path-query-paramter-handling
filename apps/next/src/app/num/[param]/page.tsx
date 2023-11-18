import React from 'react';
import {usePathParams} from '~/use-path-params';
import {pathParamsSchema, queryStringParamsSchema} from './params-schema';
import {useQueryStringParams} from '~/use-query-string-params';
import {Form} from './form';

interface PageProps {
  params: Record<string, string>;
  searchParams: {[key: string]: string | string[] | undefined};
}

const Page = ({params, searchParams}: PageProps): JSX.Element => {
  const {param} = usePathParams({schema: pathParamsSchema, params});
  const {str, num} = useQueryStringParams({schema: queryStringParamsSchema, params: searchParams});

  return (
    <>
      <p>param is {param}</p>
      <p>str is {str}</p>
      <p>num is {num === undefined ? 'undefined' : num}</p>
      <Form
        defaultValues={{
          pathParamNumValue: param,
          queryStringParamNumValue: num,
          queryStringParamStrValue: str,
        }}
      />
    </>
  );
};

export default Page;
