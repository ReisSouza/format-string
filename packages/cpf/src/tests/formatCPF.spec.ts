import { expect, describe, it } from 'vitest'

import { formatCPF, isFormatCPF } from '../index'

describe('Format CPF', () => {
  describe('should return valid format CPF', () => {
    it('Should return length 14 digits', () => {
      const result = formatCPF('13063240680')

      expect(result).length(14)
    })

    it('should format CPF with mask', () => {
      expect(formatCPF('')).toBe('')
      expect(formatCPF('9')).toBe('9')
      expect(formatCPF('94')).toBe('94')
      expect(formatCPF('943')).toBe('943')
      expect(formatCPF('9438')).toBe('943.8')
      expect(formatCPF('94389')).toBe('943.89')
      expect(formatCPF('943895')).toBe('943.895')
      expect(formatCPF('9438957')).toBe('943.895.7')
      expect(formatCPF('94389575')).toBe('943.895.75')
      expect(formatCPF('943895751')).toBe('943.895.751')
      expect(formatCPF('9438957510')).toBe('943.895.751-0')
      expect(formatCPF('94389575104')).toBe('943.895.751-04')
    })

    it('should format number CPF with mask', () => {
      expect(formatCPF(9)).toBe('9')
      expect(formatCPF(94)).toBe('94')
      expect(formatCPF(943)).toBe('943')
      expect(formatCPF(9438)).toBe('943.8')
      expect(formatCPF(94389)).toBe('943.89')
      expect(formatCPF(943895)).toBe('943.895')
      expect(formatCPF(9438957)).toBe('943.895.7')
      expect(formatCPF(94389575)).toBe('943.895.75')
      expect(formatCPF(943895751)).toBe('943.895.751')
      expect(formatCPF(9438957510)).toBe('943.895.751-0')
      expect(formatCPF(94389575104)).toBe('943.895.751-04')
    })

    it('should NOT add digits after the CPF length 14', () => {
      expect(formatCPF('94389575104123123123')).toBe('943.895.751-04')
    })

    it('should remove all non numeric characters', () => {
      expect(formatCPF('943.?ABC895.751-04abc')).toBe('943.895.751-04')
    })
  })

  describe('should return isValid', () => {
    describe('should return false', () => {
      it('when is a CPF invalid test numbers with letters', () => {
        expect(isFormatCPF('foo391.838.38test0-66')).toBe(false)
      })
    })
    it('when is a CPF valid without mask', () => {
      expect(isFormatCPF('40364478829')).toBe(false)
    })
    it('when is a value undefined return undefined', () => {
      expect(formatCPF(undefined)).toBe(undefined)
    })
    it('when is a value undefined return undefined', () => {
      expect(formatCPF(null)).toBe(undefined)
    })
  })

  describe('should return valid', () => {
    it('when is a CPF valid with mask', () => {
      expect(isFormatCPF('482.784.798-36')).toBe(true)
    })
  })
})
