// for css styling this pattern needs to be used, so that you dont need to pass className explicitly
// collect all other props by ...props
export default function Section({title, children, ...props}) { 
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}