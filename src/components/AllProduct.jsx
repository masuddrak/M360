
import { NavLink } from "react-router-dom";
import { useGetProductsQuery } from "../redux/productsApi";
import { Table } from "antd";

const AllProduct = () => {
    const { data, error, isLoading } = useGetProductsQuery({ limit: 10, skip: 0 });
                                      
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;
  
    const columns = [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {  
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Action',
        key: 'action',
        render: (item) => (
          <div>
            <NavLink to={`/details/${item.id}`}>
              <button>Details</button>
            </NavLink>
            
          </div>
        ),
      },
    ];
  
    return (
      <Table columns={columns} dataSource={data?.products} pagination={{ pageSize: 10 }} rowKey="id" />
    );
  };
  
  export default AllProduct;