'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Props = {
  productId: number
  productName: string
  productUrl: string
  productImage: string
  price: string
  sizeOptions: string // pipe-delimited e.g. "S|M|L|XL"
  colorOptions: string // pipe-delimited e.g. "White|Black"
  defaultSize?: string
  defaultColor?: string
}

export function ProductPurchaseForm({
  productId,
  productName,
  productUrl,
  productImage,
  price,
  sizeOptions,
  colorOptions,
  defaultSize,
  defaultColor,
}: Props) {
  const sizeList = React.useMemo(() => sizeOptions.split('|').filter(Boolean), [sizeOptions])
  const colorList = React.useMemo(() => colorOptions.split('|').filter(Boolean), [colorOptions])
  const [size, setSize] = React.useState<string>(defaultSize || sizeList[0] || 'M')
  const [color, setColor] = React.useState<string>(defaultColor || colorList[0] || 'White')

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-sm font-medium">Size</div>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {sizeList.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium">Color</div>
          <Select value={color} onValueChange={setColor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              {colorList.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <button
        className="snipcart-add-item inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer w-full"
        data-item-id={`pf-${productId}`}
        data-item-name={productName}
        data-item-price={price}
        data-item-url={productUrl}
        data-item-image={productImage}
        data-item-custom1-name="Size"
        data-item-custom1-options={sizeOptions}
        data-item-custom1-value={size}
        data-item-custom2-name="Color"
        data-item-custom2-options={colorOptions}
        data-item-custom2-value={color}
      >
        Add to Cart
      </button>
    </div>
  )
}


