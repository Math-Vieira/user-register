import { AuthenticatedLayout } from '@/layouts/Authenticated';
import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  return (
    <AuthenticatedLayout userName={user.name}>
      <div style={{ height: '100vh' }}>a</div>
    </AuthenticatedLayout>
  );
};
