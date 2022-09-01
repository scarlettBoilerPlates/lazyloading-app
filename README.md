LAZY: LAZY FUNCTION IS USED TO DYNAMICALLY IMPORT THE COMPONENT AND SET IT TO A VARIABLE.

SUSPENSE: SUSPENSE IS A BUILT IN COMPONENT YOU USE TO DISPLAY A FALLBACK MESSAGE WHILE THE CODE IS LOADING.

IMPLEMENTATION

import RiverInformation = lazy(() => import('..folder location'))

<Suspense fallback={<div> Loading Component </div>}>
{
    show && <RiverInformation name={river} />
}
</Suspense>