import load from './loading.module.css';

export default function Loading() {
    return (
        <div className={load.loading}>
            <div className={load.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}