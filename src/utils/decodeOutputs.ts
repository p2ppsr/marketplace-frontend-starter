import { Transaction, PushDrop, Utils } from '@bsv/sdk'

export interface DecodedOutput {
  fileUrl?: string
  name?: string
  description?: string
  satoshis?: number
  creatorPublicKey?: string
  size?: number
  txid: string
  outputIndex: number
  retentionPeriod?: number
  coverUrl?: string
}

type FieldKey = keyof DecodedOutput

export async function decodeOutput(
  beef: number[],
  outputIndex: number,
  fields: FieldKey[]
): Promise<DecodedOutput> {
  throw new Error('TODO follow the Store quickstart for Metanet Marketplace for 3d Objects')
}

export async function decodeOutputs(
  outputs: Array<{ beef: number[]; outputIndex: number }>,
  fields: FieldKey[]
): Promise<DecodedOutput[]> {
  return Promise.all(
    outputs.map(({ beef, outputIndex }) =>
      decodeOutput(beef, outputIndex, fields)
    )
  )
}
