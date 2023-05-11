export const NavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  return (
    <li>
      <a href={href} className="text-slate-200 text-sm flex items-center space-x-2 py-3 px-4 rounded-lg hover:bg-slate-800">
        {children}
      </a>
    </li>
  )
}