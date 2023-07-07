'use client';
import withAuthentication from '../HOCS/withAuthentication';

type Props = {};

function DashboardPage({}: Props) {
  return <div>Dashboard</div>;
}

export default withAuthentication(DashboardPage);
