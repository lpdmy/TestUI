import useFetchConfig from '../hooks/useFetchConfig';

const TestApiPage = () => {
  const { data, isLoading, error } = useFetchConfig();

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Lỗi: {error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Kết quả API Test</h1>
        <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto text-sm text-gray-700">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TestApiPage;