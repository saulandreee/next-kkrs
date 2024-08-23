"use client";

import React, { useCallback } from "react";
import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ count, page }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(count, page);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <ShadPagination>
      <PaginationContent>
        <PaginationItem className="text-mandy-500 h-8 w-8">
          <PaginationPrevious
            disabled={page === 1}
            href={pathname + "?" + createQueryString("page", page - 1)}
            className={"p-0 w-8 h-8"}
          />
        </PaginationItem>
        {count > 1 ? (
          [...Array(count)].map((_, index) => {
            if (page === index + 1 || index === 0 || index + 1 === count) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (page === 1 && (index + 1 === 2 || index + 1 === 3)) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page - 1 === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (page === 2 && (index + 1 === 1 || index + 1 === 3)) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page - 1 === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (page === 3 && (index + 1 === 1 || index + 1 === 2)) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page - 1 === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (page === count - 1 && (index + 1 === count - 1 || index + 1 === count - 2)) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page - 1 === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if ((page === count && index === count - 2) || (page === count && index === count - 3)) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationLink
                    className={"w-8 h-8"}
                    href={pathname + "?" + createQueryString("page", index + 1)}
                    isActive={page - 1 === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            } else if (
              (page === 1 && index + 1 === 4) ||
              index + 1 === page - 1 ||
              index + 1 === page + 1 ||
              (page === 2 && index + 1 === 4) ||
              (page === count - 1 && index + 1 === count - 3) ||
              (page === count && index + 1 === count - 3)
            ) {
              return (
                <PaginationItem
                  className="text-mandy-500 h-8 w-8"
                  key={index}
                >
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
          })
        ) : (
          <PaginationItem className="text-mandy-500 h-8 w-8">
            <PaginationLink
              className={"w-8 h-8"}
              href={pathname + "?" + createQueryString("page", 1)}
              isActive={page === 1}
            >
              {1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem className="text-mandy-500 h-8 w-8">
          <PaginationNext
            disabled={page >= count}
            href={pathname + "?" + createQueryString("page", page + 1)}
            className={"p-0 w-8 h-8"}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  );
}
