import { useState } from 'react'
import { Menu } from 'antd'
import MainLayout from 'components/main-layout'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

const menu = [
  {
    key: 'BTC_THB',
    label: 'BTC/THB',
  },
  {
    key: 'BUSD_THB',
    label: 'BUSD/THB',
  },
  {
    key: 'USDT_THB',
    label: 'USDT/THB',
  },
]

function App() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(symbol || 'BTC_THB');
  return (
    <MainLayout
      sideContent={<Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        items={menu}
        onClick={({ key }) => {
          navigate(key)
        }}
      />}
    >
      <Outlet />
    </MainLayout>
  )
}

export default App
