import { whoBringsWhat } from '@/content/sap';

// FR-08: single data source for home spotlight and /partnership. No motion (§7.4).
export function PartnershipTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
      <table className="w-full min-w-[720px] border-collapse text-left text-[15px] leading-6">
        <caption className="sr-only">Who brings what: JSJ INFOTECH, SGN Software and the combined outcome</caption>
        <thead>
          <tr className="border-b border-line bg-mist">
            <th scope="col" className="w-[14%] p-5 label-caps text-muted">Area</th>
            <th scope="col" className="p-5 font-display font-semibold">JSJ INFOTECH</th>
            <th scope="col" className="p-5 font-display font-semibold">SGN Software — SAP Gold Partner</th>
            <th scope="col" className="p-5 font-display font-semibold text-violet-deep">Combined outcome</th>
          </tr>
        </thead>
        <tbody>
          {whoBringsWhat.map((r) => (
            <tr key={r.area} className="border-b border-line last:border-0">
              <th scope="row" className="p-5 align-top font-semibold">{r.area}</th>
              <td className="p-5 align-top text-muted">{r.jsj}</td>
              <td className="p-5 align-top text-muted">{r.sgn}</td>
              <td className="p-5 align-top font-medium">{r.combined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
