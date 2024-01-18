interface PageTitleProps {
  value: string
}
export function PageTitle({ value }: PageTitleProps) {
  return <h1 className="text-3xl font-bold tracking-tight">{value}</h1>
}
