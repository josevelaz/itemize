type ScreenProps = {
  children: React.ReactNode
}
export function Screen(props: ScreenProps) {
  return (
    <div className="relative overflow-y-scroll bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-6xl pb-8 px-4 sm:static sm:px-6 lg:px-8">
          {props.children}
        </div>
      </div>
    </div>
  )
}
