import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-teal-600 ">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-semibold text-teal-600 " href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-semibold text-teal-600 ">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
