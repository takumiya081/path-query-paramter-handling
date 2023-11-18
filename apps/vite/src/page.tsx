import {useParams, useSearchParams} from 'react-router-dom';
import {PathParamsErrorBoundary} from './path-params-error-boundary';
import {pathParamsSchema, queryStringParamsSchema} from './params-schema';
import {useQueryStringParams} from './use-query-string-params';
import {usePathParams} from './use-path-params';
import {Form} from './form';
import {NotFound} from './not-found';

const Contents = (): JSX.Element => {
  const params = useParams();
  const [searchParams] = useSearchParams();

  const {param} = usePathParams({schema: pathParamsSchema, params});
  const {str, num} = useQueryStringParams({
    schema: queryStringParamsSchema,
    params: {str: searchParams.get('str'), num: searchParams.get('num')},
  });

  return (
    <div>
      <section>
        <h2>parsed value</h2>
        <p>param is {param}</p>
        <p>str is {str}</p>
        <p>num is {num === undefined ? 'undefined' : num}</p>
      </section>
      <hr />
      <section>
        <Form
          defaultValues={{
            pathParamNumValue: param,
            queryStringParamNumValue: num,
            queryStringParamStrValue: str,
          }}
        />
      </section>
    </div>
  );
};

export const Page = (): JSX.Element => {
  return (
    <PathParamsErrorBoundary
      pathParamsErrorFallbackRender={({issues}) => <NotFound issues={issues} />}
    >
      <Contents />
    </PathParamsErrorBoundary>
  );
};
