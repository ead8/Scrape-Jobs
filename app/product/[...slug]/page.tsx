import React, { Suspense } from 'react'

interface Props{
    params:{slug:string[]};
    searchParams:{sortOrder:string}
}
function SpecificProduct({params:{slug},searchParams:{sortOrder}}:Props) {
  return (
      <Suspense fallback={<p>Loadding...</p>}>
        <div>SpecificProduct {slug} {sortOrder}</div>
    </Suspense>
  )
}

export default SpecificProduct