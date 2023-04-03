import classnames from 'classnames'
import React, { useState } from 'react'
import { Typography } from './Typography'

interface PaginationMeta {
  total: number
  limit: number
}

const MAX_PAGES_SHOWN = 5

export interface PaginationProps
  extends PaginationMeta,
    React.ReactHTMLElement<HTMLDivElement> {
  defaultPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  defaultPage,
  onPageChange,
  limit,
  total,
  ...otherProps
}: PaginationProps) => {
  const totalPageCount = Math.ceil(total / limit)

  const [activePage, setActivePage] = useState(defaultPage || 0)
  const startCount = limit * (activePage - 1) + 1
  const lastCount = Math.min(total, limit * (activePage - 1) + limit)
  const hasNextPage = activePage < totalPageCount
  const hasPrevPage = activePage > 1

  const createPageOnClickHandler =
    (page: number) => (event: React.SyntheticEvent) => {
      event.preventDefault()
      setActivePage(page)
      onPageChange?.(page)
    }

  const maxStartPage = Math.max(totalPageCount - (MAX_PAGES_SHOWN - 1), 1)
  const startingPage =
    activePage > maxStartPage ? maxStartPage : Math.max(1, activePage - 2)

  const endingPage = Math.min(
    startingPage + (MAX_PAGES_SHOWN - 1),
    totalPageCount
  )

  const pages = []
  if (startingPage > 1) {
    pages.push(
      <button
        onClick={createPageOnClickHandler(1)}
        className={classnames(
          'px-4',
          'text-purple-600',
          'border border-purple-300',
          'relative inline-flex items-center',
          'hover:bg-purple-50 focus:z-20',
          {
            'z-20 bg-purple-100': 1 === activePage,
          }
        )}
      >
        <Typography variant="label-small">1</Typography>
      </button>
    )
    if (startingPage > 2) {
      pages.push(
        <button
          className={classnames(
            'px-sm py-xs',
            'text-purple-600',
            'border border-purple-300',
            'relative inline-flex items-center'
          )}
          disabled
        >
          <Typography variant="label-small">...</Typography>
        </button>
      )
    }
  }

  for (let i = startingPage; i <= endingPage; i++) {
    const buttonPage = i
    pages.push(
      <button
        key={buttonPage}
        onClick={createPageOnClickHandler(buttonPage)}
        className={classnames(
          'px-sm py-xs',
          'text-purple-600',
          'border border-purple-300',
          'relative inline-flex items-center',
          'hover:bg-purple-50 focus:z-20',
          {
            'z-20 bg-purple-100': buttonPage === activePage,
          }
        )}
      >
        <Typography variant="label-small">{buttonPage}</Typography>
      </button>
    )
  }

  if (endingPage < totalPageCount) {
    if (totalPageCount - endingPage > 1) {
      pages.push(
        <button
          className={classnames(
            'px-sm py-xs',
            'text-purple-600',
            'border border-purple-300',
            'relative inline-flex items-center'
          )}
          disabled
        >
          <Typography variant="label-small">...</Typography>
        </button>
      )
    }
    pages.push(
      <button
        onClick={createPageOnClickHandler(totalPageCount)}
        className={classnames(
          'px-sm py-xs',
          'text-purple-600',
          'border border-purple-300',
          'relative inline-flex items-center',
          'hover:bg-purple-50 focus:z-20',
          {
            'z-20 bg-purple-100': totalPageCount === activePage,
          }
        )}
      >
        <Typography variant="label-small">{totalPageCount}</Typography>
      </button>
    )
  }

  return (
    <div {...otherProps}>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            className="px-sm py-xs relative inline-flex items-center rounded-md border border-purple-300 text-purple-700 hover:bg-purple-50"
            onClick={createPageOnClickHandler(activePage - 1)}
            disabled={!hasPrevPage}
          >
            <Typography variant="label-small">Previous</Typography>
          </button>
          <button
            className="px-sm py-xs relative ml-3 inline-flex items-center rounded-md border border-purple-300 text-purple-700 hover:bg-purple-50"
            onClick={createPageOnClickHandler(activePage + 1)}
            disabled={!hasNextPage}
          >
            <Typography variant="label-small">Next</Typography>
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-600">
              {`Showing `}
              <span className="font-medium">{startCount}</span>
              {` to `}
              <span className="font-medium">{lastCount}</span>
              {` of `}
              <span className="font-medium">{total}</span>
              {` results`}
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                className={classnames(
                  'px-2 ',
                  'rounded-l-md border border-purple-300',
                  'relative inline-flex items-center',
                  hasPrevPage
                    ? 'text-purple-600 hover:bg-purple-50 focus:z-20'
                    : 'text-purple-300'
                )}
                disabled={!hasPrevPage}
                onClick={createPageOnClickHandler(activePage - 1)}
              >
                <Typography variant="label-small">
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
              </button>
              {pages}

              <button
                className={classnames(
                  'px-2 ',
                  'rounded-r-md border border-purple-300',
                  'relative inline-flex items-center',
                  hasNextPage
                    ? 'text-purple-600 hover:bg-purple-50 focus:z-20'
                    : 'text-purple-300'
                )}
                disabled={!hasNextPage}
                onClick={createPageOnClickHandler(activePage + 1)}
              >
                <Typography variant="label-small">
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
