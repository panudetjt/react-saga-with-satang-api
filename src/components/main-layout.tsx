import { Layout } from "antd";

const { Content, Sider } = Layout
type MainLayoutProps = {
    sideContent?: React.ReactNode,
    children?: React.ReactNode,
}
export default function MainLayout(props: MainLayoutProps) {
    const { sideContent, children } = props
    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Layout className="bg-white" style={{ padding: '24px 0' }}>
                    <Sider className="bg-white" width={200}>
                        {sideContent}
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
                </Layout>
            </Content>
        </Layout>
    );
}