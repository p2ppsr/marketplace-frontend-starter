import React, { useEffect, useState } from 'react'
import { Container, Typography, Box, Button, Grid, Paper, CardActions, Card, CardContent, LinearProgress } from '@mui/material'
import { Img } from '@bsv/uhrp-react'
import { AtomicBEEF, AuthFetch, LookupResolver, PushDrop, Transaction, Utils, WalletClient } from '@bsv/sdk'
import constants from '../constants'
import { decodeOutputs, DecodedOutput } from '../utils/decodeOutputs'

interface UploadedFile {
  fileUrl: string
  name: string
  satoshis: number
  coverUrl: string
  txid: string
  outputIndex: number
  retentionPeriod: number
  timesBought?: number
}

interface ExpiredFile {
  name: string
  satoshis: number
  txid: string
  outputIndex: number
  retentionPeriod: number
  timesBought?: number
}

interface BalanceResponse {
  balance: number
}

interface WithdrawResponse {
  transaction: string
  derivationPrefix: string
  derivationSuffix: string
  amount: number
  senderIdentityKey: string
}

const fields: (keyof DecodedOutput)[] = [
  'fileUrl',
  'name',
  'satoshis',
  'coverUrl',
  'txid',
  'outputIndex',
  'retentionPeriod',
]

const expiredFields: (keyof DecodedOutput)[] = [
  'name',
  'satoshis',
  'txid',
  'outputIndex',
  'retentionPeriod',
]

const spendFields: (keyof DecodedOutput)[] = [
  'txid',
  'outputIndex'
]

const Account: React.FC = () => {
  const [balance, setBalance] = useState<number>(0)
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [expiredFiles, setExpiredFiles] = useState<ExpiredFile[]>([])
  const [loading, setLoading] = useState(false)

  const wallet = new WalletClient('auto', 'localhost')
  const authFetch = new AuthFetch(wallet)
  const pushdrop = new PushDrop(wallet)
  const lookupResolver = new LookupResolver({ networkPreset: window.location.hostname === 'localhost' ? 'local' : 'mainnet' })

  useEffect(() => {
    const fetchData = async () => {
      try {
        throw 'TODO follow the Account quickstart for Metanet Marketplace for 3d Objects'
      } catch (error) {
        console.error('Error fetching account data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleWithdraw = async () => {
    setLoading(true)
    try {
      throw 'TODO follow the Account quickstart for Metanet Marketplace for 3d Objects'
    } catch (error) {
      console.error('Error when withdrawing:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRemoveFile = async (txid: string, outputIndex: number) => {
    setLoading(true)
    try {
      throw 'TODO follow the Account quickstart for Metanet Marketplace for 3d Objects'
    } catch (error) {
      console.error('Delete file error:', error)
    } finally {
      setLoading(false)
    }
  }

  const FileCard: React.FC<{
    name: string
    satoshis: number
    txid: string
    outputIndex: number
    retentionPeriod: number
    coverUrl?: string
    timesBought?: number
  }> = ({
    name,
    satoshis,
    txid,
    outputIndex,
    retentionPeriod,
    coverUrl,
    timesBought
  }) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Card sx={{ p: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {coverUrl && (
            <Img
              src={coverUrl}
              alt={name}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                borderRadius: 4
              }}
            />
          )}
          <CardContent sx={{ flexGrow: 1, pt: coverUrl ? 2 : 0 }}>
            <Typography variant="h6" noWrap gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2">Cost: {satoshis} sats</Typography>
            <Typography variant="body2">
              Expires: {new Date(retentionPeriod).toLocaleString()}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => handleRemoveFile(txid, outputIndex)}
              disabled={loading}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Account
      </Typography>
      {loading && <LinearProgress sx={{ mb: 2 }} />}

      <Paper
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          mb: 4
        }}
      >
        <Box>
          <Typography variant="subtitle2">Balance</Typography>
          <Typography variant="h3">{balance} sats</Typography>
        </Box>
        <Button
          variant="contained"
          disabled={loading || balance <= 0}
          onClick={handleWithdraw}
        >
          Withdraw
        </Button>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Expired Files
        </Typography>
        {expiredFiles.length ? (
          <Grid container spacing={2}>
            {expiredFiles.map((f) => (
              <FileCard
                key={`${f.txid}.${f.outputIndex}`}
                {...f}
              />
            ))}
          </Grid>
        ) : (
          <Typography color="text.secondary">
            You have no expired files.
          </Typography>
        )}
      </Paper>

      <Typography variant="h6" gutterBottom>
        Your Uploaded Files
      </Typography>
      <Grid container spacing={3}>
        {files.map((f) => (
          <FileCard key={`${f.txid}.${f.outputIndex}`} {...f} />
        ))}
      </Grid>
    </Container>
  )
}

export default Account
