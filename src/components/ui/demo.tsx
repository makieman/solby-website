import { Component } from "@/components/ui/background-components";

export default function DemoOne() {
    return (
        <div className="space-y-8 p-6">
            <div>
                <h4 className="mb-2 font-semibold">Default (uses component props / defaults)</h4>
                <Component />
            </div>

            <div>
                <h4 className="mb-2 font-semibold">Overridden via CSS variables</h4>
                <div style={{
                    // demonstrate overriding via CSS variables on a wrapper
                    ['--bg-start' as any]: '#FFF1E6',
                    ['--bg-end' as any]: '#EAF6FF',
                    ['--bg-opacity' as any]: '0.45',
                    ['--bg-mix' as any]: 'screen',
                }}>
                    <Component />
                </div>
            </div>
        </div>
    );
}
import { Navbar1 } from "@/components/ui/navbar-1"
import { CtaCard } from "@/components/ui/cta-card"

const Demo = () => {
    return (
        <>
            <Navbar1 />
            <CtaCard />
        </>
    )
}

export { Demo }
