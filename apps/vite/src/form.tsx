import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

type FormProps = {
  defaultValues?: {
    pathParamNumValue?: number;
    queryStringParamNumValue?: number;
    queryStringParamStrValue?: string;
  };
};

export const Form = ({defaultValues}: FormProps): JSX.Element => {
  const navigate = useNavigate();

  const [pathParamNumValue, setPathParamNumValue] = useState(
    defaultValues?.pathParamNumValue?.toString(),
  );
  const [queryStringParamNumValue, setQueryStringParamNumValue] = useState(
    defaultValues?.queryStringParamNumValue?.toString(),
  );
  const [queryStringParamStrValue, setQueryStringParamStrValue] = useState(
    defaultValues?.queryStringParamStrValue,
  );

  useEffect(() => {
    setPathParamNumValue(defaultValues?.pathParamNumValue?.toString());
  }, [defaultValues?.pathParamNumValue]);
  useEffect(() => {
    setQueryStringParamNumValue(defaultValues?.queryStringParamNumValue?.toString());
  }, [defaultValues?.queryStringParamNumValue]);
  useEffect(() => {
    setQueryStringParamStrValue(defaultValues?.queryStringParamStrValue);
  }, [defaultValues?.queryStringParamStrValue]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = new URLSearchParams();
    if (queryStringParamNumValue !== undefined) {
      url.set('num', queryStringParamNumValue.toString());
    }
    if (queryStringParamStrValue !== undefined) {
      url.set('str', queryStringParamStrValue.toString());
    }
    const value = `/num/${pathParamNumValue}?${url.toString()}`;
    return navigate(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>path parameter</h3>
      <div>
        <label htmlFor="pathParamNum">num</label>
        <input
          type="text"
          value={pathParamNumValue}
          onChange={(e) => setPathParamNumValue(e.currentTarget.value)}
          id="pathParamNum"
        />
      </div>
      <h3>query string parameter</h3>
      <div>
        <label htmlFor="pathParamNum">num: </label>
        <input
          type="text"
          value={queryStringParamNumValue}
          id="queryStringParamNum"
          onChange={(e) => setQueryStringParamNumValue(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="pathParamNum">str: </label>
        <input
          type="text"
          value={queryStringParamStrValue}
          id="queryStringParamStr"
          onChange={(e) => setQueryStringParamStrValue(e.currentTarget.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
