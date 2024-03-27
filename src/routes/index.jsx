import { useRoutes } from 'react-router-dom';

import HomeRoutes from './HomeRoutes';
export default function ThemeRoutes() {
    return useRoutes([HomeRoutes]);
}
