// src/components/ReviewForm.js
import  { useEffect, useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useGetProductsQuery } from '../redux/productsApi';

const ReviewForm = ({id,reviews:updateReviews}) => {
  const [reviews, setReviews] = useState([]);
  const { refetch } = useGetProductsQuery();
  // Fetch reviews from an API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  const onFinish = (values) => {
    refetch()
    console.log('Received values:', values.
      reviews[0]);
      updateReviews.push(values.
        reviews[0])
        console.log(updateReviews)
  };

  return (
    <Form
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      initialValues={{ reviews: reviews }}
    >
      <Form.List name="reviews">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'reviewerEmail']}
                  fieldKey={[fieldKey, 'reviewerEmail']}
                  rules={[{ required: true, message: 'Missing reviewer name' }]}
                >
                  <Input placeholder="Email Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'comment']}
                  fieldKey={[fieldKey, 'comment']}
                  rules={[{ required: true, message: 'Missing comment' }]}
                >
                  <Input placeholder="Comment" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Review
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit Reviews
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
