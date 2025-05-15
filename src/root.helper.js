import { ConfigNameRoutes, routesUrl } from "./routes/constants";
import {
    IconHome,
    IconProfile,
    IconInvalidPaymentMethods,
    IconCostumerMenu,
    IconUserMenu,
    IconRecipes,
    IconTraining,
    IconBlackList,
    IconQuotations,
    IconConfigReservations,
    IconConfigProducts,
    IconRoulette,
    IconMenuCollaborators
} from './assets/icons/customize/config'

export const dataMenu = [
    {
        name: 'Inicio',
        href: routesUrl.home,
        icon: <IconHome />,
        permission: 'Home',
        isPublic: true
    },
    {
        name: 'Afiliados',
        href: ConfigNameRoutes.afiliates,
        icon: <IconProfile />,
        permissions: 'Afiliados',
        isPublic: false
    },
    {
        name: 'Mis Afiliados',
        href: ConfigNameRoutes.afiliates,
        icon: <IconProfile />,
        permissions: 'Mis Afiliados',
        isPublic: false
    },
    {
        name: 'Metodos de pago no Validos',
        href: ConfigNameRoutes.afiliates,
        icon: <IconInvalidPaymentMethods />,
        permissions: 'Metodos de pago no Validos',
        isPublic: false
    },
    {
        name: 'Lista General Activos',
        href: ConfigNameRoutes.afiliates,
        icon: <IconProfile />,
        permissions: 'Lista General Activos',
        isPublic: false
    },
    {
        name: 'Lista General Activos mis Carterizados',
        href: ConfigNameRoutes.afiliates,
        icon: <IconProfile />,
        permissions: 'Lista General Activos mis Carterizados',
        isPublic: false
    },
    {
        name: 'Clientes',
        href: ConfigNameRoutes.customersList,
        icon: <IconCostumerMenu color="#bb592e" />,
        permissions: 'Clientes',
        isPublic: false
    },
    {
        name: 'Prospectos',
        href: ConfigNameRoutes.leads,
        icon: <IconUserMenu color="#bb592e" size={30} />,
        permissions: 'Prospectos',
        isPublic: false
    },
    {
        name: 'Blacklist',
        href: ConfigNameRoutes.BlackList,
        icon: <IconBlackList />,
        permissions: 'Blacklist',
        isPublic: false
    },
    {
        name: 'Blacklist Información',
        href: ConfigNameRoutes.blackListData,
        icon: <IconBlackList />,
        permissions: 'Blacklist Información',
        isPublic: false
    },
    {
        name: 'Nutrición',
        href: ConfigNameRoutes.BlackList,
        icon: <IconRecipes />,
        permissions: 'Nutrición',
        isPublic: false
    },
    {
        name: 'Entrenamientos',
        href: ConfigNameRoutes.BlackList,
        icon: <IconTraining />,
        permissions: 'Entrenamientos',
        isPublic: false
    },
    {
        name: 'Lista de espera Tokenizaciones',
        href: ConfigNameRoutes.TokenizationList,
        icon: <IconQuotations />,
        permissions: 'Lista de espera Tokenizaciones',
        isPublic: false
    },
    {
        name: 'Reservas',
        href: ConfigNameRoutes.configReservations,
        icon: <IconConfigReservations />,
        permissions: 'Reservas',
        isPublic: false
    },
    {
        name: 'Productos',
        href: ConfigNameRoutes.configProducts,
        icon: <IconConfigProducts />,
        permissions: 'Productos',
        isPublic: false
    },
    {
        name: 'Ruleta',
        href: ConfigNameRoutes.configRoulette,
        icon: <IconRoulette color="#bb592e" size={20} />,
        permissions: 'Ruleta',
        isPublic: false
    },
    {
        name: 'Colaboradores',
        href: ConfigNameRoutes.collaborators,
        icon: <IconMenuCollaborators />,
        permissions: 'Colaboradores',
        isPublic: false
    },
    {
        name: 'Espacios',
        href: ConfigNameRoutes.locations,
        icon: <IconConfigReservations />,
        permissions: 'Espacios',
        isPublic: false
    },
    {
        name: 'Cupones',
        href: ConfigNameRoutes.locations,
        icon: <IconConfigReservations />,
        permissions: 'Cupones',
        isPublic: false
    }
];