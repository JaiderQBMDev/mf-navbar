import { ConfigNameRoutes, routesUrl } from "./routes/constants";
import {
    IconHome,
    IconProfile,
    IconCostumerMenu,
    IconUserMenu,
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
        isPublic: false
    },
    {
        name: 'Afiliados',
        href: ConfigNameRoutes.afiliates,
        icon: <IconProfile />,
        isPublic: false
    },
    {
        name: 'Clientes',
        href: ConfigNameRoutes.customersList,
        icon: <IconCostumerMenu color="#bb592e"/>,
        isPublic: false
    },
    {
        name: 'Prospectos',
        href: ConfigNameRoutes.leads,
        icon: <IconUserMenu color="#bb592e" size={30}/>,
        isPublic: false
    },
    {
        name: 'Blacklist',
        href: ConfigNameRoutes.BlackList,
        icon: <IconBlackList />,
        isPublic: false
    },
    {
        name: 'Blacklist Información',
        href: ConfigNameRoutes.blackListData,
        icon: <IconBlackList />,
        isPublic: false
    },
    {
        name: 'Lista de espera Tokenizaciones',
        href: ConfigNameRoutes.TokenizationList,
        icon: <IconQuotations />,
        isPublic: false
    },
    {
        name: 'Reservas',
        href: ConfigNameRoutes.configReservations,
        icon: <IconConfigReservations />,
        isPublic: false
    },
    {
        name: 'Productos',
        href: ConfigNameRoutes.configProducts,
        icon: <IconConfigProducts />,
        isPublic: false
    },
    {
        name: 'Ruleta',
        href: ConfigNameRoutes.configRoulette,
        icon: <IconRoulette color="#bb592e"/>,
        isPublic: false
    },
    {
        name: 'Colaboradores',
        href: ConfigNameRoutes.collaborators,
        icon: <IconMenuCollaborators />,
        isPublic: false
    },
    {
        name: 'Espacios',
        href: ConfigNameRoutes.locations,
        icon: <IconConfigReservations />,
        isPublic: false
    }
]